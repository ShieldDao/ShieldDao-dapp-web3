import { Modal, Form, Row, Col, Input, Button } from 'antd';
import styled from 'styled-components';

const SDepoNWith = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 10px;
    line-height: 1;
  }

  .balance {
    text-align: center;
    display: block;
    width: 100%;
    margin-bottom: 30px;
  }

  .porion-selectors {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0 10px;
    margin-bottom: 25px;
  }

  Button {
    width: 100%;
  }
`;

const DepositNWithdraw = ({ setVisible, visible }) => {
  return (
    <Modal
      width={800}
      onCancel={() => setVisible(false)}
      footer={null}
      visible={visible}
    >
      <SDepoNWith>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form>
              <h2>
                <strong>Wallet</strong>
              </h2>

              <span className="balance">0.0000 SHD</span>

              <Form.Item>
                <Input placeholder="0.0000" />
              </Form.Item>

              <div className="porion-selectors">
                <Button type="ghost">25%</Button>
                <Button type="ghost">50%</Button>
                <Button type="ghost">75%</Button>
                <Button type="ghost">100%</Button>
              </div>

              <Button size="large" type="primary">
                Deposit
              </Button>
            </Form>
          </Col>
          <Col span={12}>
            <Form>
              <h2>
                <strong>Vault</strong>
              </h2>

              <span className="balance">0.0000 SHD (0.0000 sSHD)</span>

              <Form.Item>
                <Input placeholder="0.0000" />
              </Form.Item>

              <div className="porion-selectors">
                <Button type="ghost">25%</Button>
                <Button type="ghost">50%</Button>
                <Button type="ghost">75%</Button>
                <Button type="ghost">100%</Button>
              </div>

              <Button size="large" type="primary">
                Withdraw
              </Button>
            </Form>
          </Col>
        </Row>
      </SDepoNWith>
    </Modal>
  );
};

export default DepositNWithdraw;
