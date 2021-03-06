import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { apiGetAccountAssets } from '../helpers/api';
import { getChainData } from '../helpers/utils';
import { notification } from 'antd';

const INITIAL_STATE = {
  connected: false,
  setConnected: () => {},
  fetching: false,
  setFetching: () => {},
  address: null,
  setAddress: () => {},
  web3: null,
  setWeb3: () => {},
  provider: null,
  setProvider: () => {},
  chainId: 1,
  setChainId: () => {},
  networkId: 1,
  setNetworkId: () => {},
  assets: [],
  setAssets: () => {},
  showModal: false,
  setShowModal: () => {},
  pendingRequest: false,
  setPendingRequest: () => {},
  result: null,
  setResult: () => {},
};

export const walletContext = createContext(INITIAL_STATE);

const initWeb3 = (provider) => {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
};

const WalletProvider = (props) => {
  const [connected, setConnected] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [address, setAddress] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [provider, setProvider] = useState(null);
  const [chainId, setChainId] = useState(1);
  const [networkId, setNetworkId] = useState(1);
  const [assets, setAssets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pendingRequest, setPendingRequest] = useState(false);
  const [result, setResult] = useState(null);

  const getNetwork = useCallback(() => getChainData(chainId).network, [
    chainId,
  ]);
  const getProviderOptions = () => {
    return {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
    };
  };

  const web3Modal = useMemo(() => {
    return new Web3Modal({
      network: getNetwork(),
      cacheProvider: false,
      providerOptions: getProviderOptions(),
    });
  }, [getNetwork]);

  const resetApp = useCallback(async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    web3Modal.clearCachedProvider();
    setConnected(false);
    setFetching(false);
    setAddress(null);
    setWeb3(null);
    setProvider(null);
    setChainId(1);
    setNetworkId(1);
    setAssets([]);
    setShowModal(false);
    setPendingRequest(false);
    setResult(null);
  }, [web3, web3Modal]);

  const getAccountAssets = useCallback(async () => {
    setFetching(true);
    try {
      // get account balances
      const assets = await apiGetAccountAssets(address, chainId);

      setAssets(assets);
      setFetching(false);
    } catch (error) {
      console.error(error); // tslint:disable-line
      setFetching(false);
    }
  }, [address, chainId]);

  const subscribeProvider = useCallback(
    async (provider) => {
      if (!provider.on) {
        return;
      }

      provider.on('accountsChanged', async (accounts) => {
        setAddress(await accounts[0]);
        await getAccountAssets();
      });

      provider.on('chainChanged', async (chainId) => {
        const networkId = await web3.eth.net.getId();
        setNetworkId(networkId);
        setChainId(chainId);
        await getAccountAssets();
      });

      provider.on('connect', () => {
        console.info('Connected');
      });

      provider.on('disconnect', () => {
        console.info('Disconnected');
        resetApp();
      });
    },
    [getAccountAssets, resetApp, web3?.eth?.net]
  );

  const onConnect = useCallback(async () => {
    try {
      const provider = await web3Modal.connect();
      await subscribeProvider(provider);
      const web3 = initWeb3(provider);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      const networkId = await web3.eth.net.getId();
      const chainId = await web3.eth.chainId();

      setWeb3(web3);
      setProvider(provider);
      setConnected(true);
      setAddress(address);
      setChainId(chainId);
      setNetworkId(networkId);
      await getAccountAssets();
    } catch (err) {
      // console.error(Object.keys(err));
      if (err?.message) {
        notification.error({
          message: err.message,
        });
      }
    }
  }, [getAccountAssets, subscribeProvider, web3Modal]);

  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      onConnect();
    }

    return () => {};
  }, [connected, onConnect, web3Modal?.cachedProvider]);

  return (
    <walletContext.Provider
      value={{
        connected,
        fetching,
        address,
        web3,
        provider,
        chainId,
        networkId,
        assets,
        showModal,
        pendingRequest,
        result,
        setConnected,
        setFetching,
        setAddress,
        setWeb3,
        setProvider,
        setChainId,
        setNetworkId,
        setAssets,
        setShowModal,
        setPendingRequest,
        setResult,
        onConnect,
        resetApp,
      }}
    >
      {props.children}
    </walletContext.Provider>
  );
};

export default WalletProvider;
