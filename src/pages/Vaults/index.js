import { Col, Row, Typography } from 'antd';
import VaultCard from '../../components/VaultCard';

const VaultsPage = () => {
  return (
    <div>
      <Typography.Text strong type="warning" underline>
        This project is in beta. Use at your own risk.
      </Typography.Text>

      <h1>
        <strong>🛡 Staking Vaults</strong>
      </h1>
      <p>Earn Rewards by staking your SHD Tokens into vaults</p>

      <Row gutter={[15, 15]}>
        <Col span={10}>
          <VaultCard
            name="Shield DAO"
            ticker="SHD"
            apy="2,398%"
            logo="/images/logo-black-symbol.png"
          />
        </Col>
        <Col span={10}>
          <VaultCard
            name="Tether US"
            ticker="USDT"
            apy="896%"
            logo="/images/USDT-logo.ede9da70.png"
          />
        </Col>
      </Row>
    </div>
  );
};

export default VaultsPage;
