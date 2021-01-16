import styled from 'styled-components';
import NavLinks from './NavLinks';

const StyledSidebar = styled.aside`
  position: fixed;
  padding-top: 80px;
  left: 0;
  height: 100%;
  top: 0;
  width: 240px;
  border-right: 2px solid #f3f3f3;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavLinks />
    </StyledSidebar>
  );
};

export default Sidebar;