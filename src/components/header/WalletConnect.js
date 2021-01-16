import { Button } from 'antd';
import { useContext } from 'react';
import styled from 'styled-components';
import { walletContext } from '../../contexts/WalletContext';
import { ellipseAddress } from '../../helpers/utils';

const StyledWalletConnect = styled.div`
  margin-left: auto;
`;

const SProfile = styled.div`
  display: flex;
  align-items: center;

  figure {
    margin: 0;

    img {
      border-radius: 50%;
    }
  }

  .content {
    flex: 1;
    min-width: 0;
    margin-left: 10px;
  }
`;

const SAddress = styled.strong`
  font-size: 14px;
  display: block;
`;

const WalletConnect = () => {
  const { connected, address, onConnect, resetApp } = useContext(walletContext);
  return (
    <StyledWalletConnect>
      {connected ? (
        <SProfile>
          <figure>
            <img
              alt="Wallet"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAfElEQVRYhe3UsQ3AIAwEQNo0zJK9GCoFO2Q4mtCCI+X1siK7+MKVjbnioYzjftaqo29l++06P4vdVwQIB6AFqM/O274A8QAUGi/A/QoE+B2ABtAFLNDeJ0A+APuRsPMC5AOgAyhUbGhfH5EA4QBvqLzzAuQHsKFk9wkQDph1+vtIpAJ9cwAAAABJRU5ErkJggg=="
            />
          </figure>

          <div className="content">
            <SAddress>{ellipseAddress(address)}</SAddress>
            <Button onClick={() => resetApp()} type="text" size="small" danger>
              Disconnect
            </Button>
          </div>
        </SProfile>
      ) : (
        <Button onClick={() => onConnect()} size="large" type="primary">
          Connect Wallet
        </Button>
      )}
    </StyledWalletConnect>
  );
};

export default WalletConnect;
