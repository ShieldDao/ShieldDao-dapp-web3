import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WalletConnect from './WalletConnect';

const ShieldDAOLogo = styled.img`
  max-width: 100px;
  height: auto;
  margin-left: 24px;
`;

const SiteHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #f3f3f3;
  height: 64px;
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  width: 100%;
  background-color: #fff;
`;

const Header = () => {
  return (
    <SiteHeader id="site_header" className="site-header">
      <Link to="/">
        <ShieldDAOLogo src="/images/logo-black.png" alt="ShieldDAO" />
      </Link>

      <WalletConnect />
    </SiteHeader>
  );
};

export default Header;
