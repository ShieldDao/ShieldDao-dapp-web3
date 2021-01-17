import styled from 'styled-components';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const StyledAppBodyWrap = styled.div`
  width: 100%;
`;

const StyledAppMain = styled.main`
  padding: 80px 30px 30px 272px;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />

      <StyledAppBodyWrap>
        <Sidebar />

        <StyledAppMain>{children}</StyledAppMain>
      </StyledAppBodyWrap>
    </>
  );
};

export default AppLayout;
