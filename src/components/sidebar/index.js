import styled from 'styled-components';
import NavLinks from './NavLinks';
import SidebarFooter from './SidebarFooter';

const StyledSidebar = styled.aside`
  position: fixed;
  padding-top: 80px;
  left: 0;
  height: 100%;
  top: 0;
  width: 240px;
  border-right: 2px solid #f3f3f3;
  display: flex;
  flex-direction: column;

  nav {
    flex: 1;
    min-height: 0;
    overflow: auto;
  }

  a {
    color: #374151;
    font-weight: 500;
    font-size: 14px;

    svg {
      fill: #485975;
    }
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavLinks />
      <SidebarFooter />
    </StyledSidebar>
  );
};

export default Sidebar;
