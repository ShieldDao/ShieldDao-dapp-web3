import styled from 'styled-components';

const ShieldDAOLogo = styled.img`
  height: auto;
  margin-left: 24px;
`;

const StyledHomeContent = styled.div`
  img {
    display: block;
    margin: 0 auto 20px;
  }
`;

const HomePage = () => {
  return (
    <StyledHomeContent>
      <ShieldDAOLogo src="/images/logo-black.png" alt="ShieldDAO" />

      <p>
        ShieldDAO is a decentralized community of Blockchain products users, who
        votes, take decisions, delegate, index and curate Blockchain assets.
      </p>
    </StyledHomeContent>
  );
};

export default HomePage;
