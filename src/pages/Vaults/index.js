import styled from 'styled-components';
import VaultCard from '../../components/VaultCard';

const VaultsRow = styled.div`
  display: flex;
  justify-content: center;
`;

const VaultsPage = () => {
  return (
    <div>
      <p>This project is in beta. Use at your own risk.</p>

      <h1>
        <strong>🛡 Staking Vaults</strong>
      </h1>
      <p>Earn Rewards by staking your SHD Tokens into vaults</p>

      <VaultsRow>
        <VaultCard
          name="Shield DAO"
          ticker="SHD"
          apy="2,398%"
          logo="/images/logo-black-symbol.png"
        />
        <VaultCard
          name="Tether US"
          ticker="USDT"
          apy="548%"
          logo="/images/USDT-logo.ede9da70.png"
        />
      </VaultsRow>
    </div>
  );
};

export default VaultsPage;
