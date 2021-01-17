import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import DepositNWithdraw from './DepositNWithdraw';

const SVaultCard = styled.div`
  border: 1px solid #e7e7e7;
  background: #fff;
  box-shadow: 0 2px 8px rgba(174, 195, 210, 0.25);
  border-radius: 8px;
  padding: 30px;
  max-width: 450px;
  width: 100%;
  margin: 0 15px;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 7px 29px 0 rgba(13, 118, 179, 0.2) !important;
    transition-duration: 0.3s;
    border: 1px solid #008bd9 !important;
    border-radius: 8px;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    position: relative;

    .apy {
      background-color: #1890ff;
      color: #fff;
      text-align: center;
      padding: 6px 12px;
      border-radius: 12px;
      text-transform: uppercase;
      position: absolute;
      top: -10px;
      right: -30px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      font-size: 13px;

      strong {
        font-size: 15px;
        margin-left: 4px;
        display: inline-block;
      }
    }

    img {
      max-width: 48px;
      height: auto;
      margin-right: 20px;
    }

    .content {
      flex: 1;
      min-width: 0;
      line-height: 1.3;
    }

    p {
      margin: 0;
    }

    h2 {
      margin: 0;
      font-weight: 700;

      span {
        font-size: 12px;
        color: #a8a8a8;
        font-weight: 300;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 30px;

    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(231, 231, 231);
      padding: 20px 0;
      align-items: center;

      &.apy {
        font-weight: 900;
        font-size: 38px;
        text-align: center;
      }

      .ttl,
      strong {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
        color: #000;
      }

      strong {
        font-size: 22px;
        font-weight: 900;
      }
    }
  }

  Button {
    width: 100%;
  }
`;

const VaultCard = ({ name, ticker, logo, apy }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SVaultCard>
      <header>
        <img src={logo} alt="symbol" />
        <div className="content">
          <h2>
            {ticker} <span>({name})</span>
          </h2>
          <p>Staking Vault</p>
        </div>

        <span className="apy">
          Apy:
          <strong>{apy}</strong>
        </span>
      </header>

      <ul>
        <li>
          <span className="ttl">Total Value Locked:</span>

          <strong>12,034.0000 {ticker}</strong>
        </li>
        <li>
          <span className="ttl">Claimable Reward:</span>

          <strong>0 SHD</strong>
        </li>

        <li>
          <span className="ttl">
            Your Vault Balance:
            <br />
            <strong>12.0000 {ticker}</strong>
          </span>

          <span className="ttl">
            Available to Deposit:
            <br />
            <strong>0.0000 {ticker}</strong>
          </span>
        </li>
      </ul>

      <Button size="large" type="primary" onClick={() => setModalVisible(true)}>
        Deposit and Withdraw
      </Button>

      <DepositNWithdraw setVisible={setModalVisible} visible={modalVisible} />
    </SVaultCard>
  );
};

export default VaultCard;
