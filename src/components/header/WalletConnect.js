import { useContext } from 'react';
import styled from 'styled-components';
import { walletContext } from '../../contexts/WalletContext';

const StyledWalletConnect = styled.div`
  margin-left: auto;
`;

const WalletConnect = () => {
  const { connected, address, onConnect, resetApp } = useContext(walletContext);

  return (
    <StyledWalletConnect>
      {connected && (
        <div>
          {address} Connected <span onClick={() => resetApp()}>Disconnect</span>
        </div>
      )}

      {!connected && (
        <button onClick={() => onConnect()} type="button">
          Connect Wallet
        </button>
      )}
    </StyledWalletConnect>
  );
};

export default WalletConnect;
