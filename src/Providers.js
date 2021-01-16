import WalletProvider from './contexts/WalletContext';

const Providers = ({ children }) => {
  return <WalletProvider>{children}</WalletProvider>;
};

export default Providers;
