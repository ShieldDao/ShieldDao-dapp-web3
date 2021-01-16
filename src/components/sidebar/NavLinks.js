import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../../static/svg/home.svg';
import { ReactComponent as ShieldIcon } from '../../static/svg/shield.svg';
import NavItem from './NavItem';

const StyledNav = styled.nav`
  margin-top: 0px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li:not(.shown) > ul {
      display: none;
    }
  }

  a {
    display: block;
    height: 48px;
    display: flex;
    line-height: 1;
    align-items: center;
    padding: 0 16px;

    &.active {
      box-shadow: rgb(31, 199, 212) -4px 0px 0px inset;
      background-color: #f9f9f9;
    }

    svg {
      width: 1.7em;
      height: 1.7em;
    }

    &:hover {
      background-color: #f7f7f7;
    }
  }
`;

const NavLinks = () => {
  return (
    <StyledNav>
      <ul>
        <NavItem href="/" icon={<HomeIcon />} title="Home" />
        <NavItem href="/vaults" icon={<ShieldIcon />} title="Vaults" />
      </ul>
    </StyledNav>
  );
};

export default NavLinks;
