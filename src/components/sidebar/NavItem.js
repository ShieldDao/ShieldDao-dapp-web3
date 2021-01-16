import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledButtonText = styled.span`
  flex-grow: 1;
  margin-left: 8px;
`;

const NavItem = ({ isOpen, href, title, icon, children, maxHeight }) => {
  const { pathname } = useLocation();

  return (
    <li role="button">
      <NavLink isActive={() => pathname === href} to={href}>
        {icon}
        <StyledButtonText>{title}</StyledButtonText>
      </NavLink>
    </li>
  );
};

export default NavItem;
