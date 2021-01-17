import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../../static/svg/home.svg';
import { ReactComponent as ShieldIcon } from '../../static/svg/shield.svg';
import { ReactComponent as MoreIcon } from '../../static/svg/menu.svg';
import { ReactComponent as StatsIcon } from '../../static/svg/graph.svg';
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

    li.shown svg.arrow-down {
      transform: scale(1, -1);
    }

    li ul a {
      padding-left: 35px;
      height: 38px;
      font-size: 13px;
    }
  }

  a {
    display: block;
    height: 48px;
    display: flex;
    line-height: 1;
    align-items: center;
    padding: 0 16px;
    font-size: 14px;

    &.active {
      box-shadow: rgb(31, 199, 212) -4px 0px 0px inset;
      background-color: #f9f9f9;
    }

    svg {
      width: 1.7em;
      height: 1.7em;

      &.arrow-down {
        width: 1em;
        height: 1em;
      }
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
        <NavItem href="/" icon={<HomeIcon className="icon" />} title="Home" />
        <NavItem
          href="/vaults"
          icon={<ShieldIcon className="icon" />}
          title="Vaults"
        />
        <NavItem
          href="/"
          icon={<StatsIcon className="icon" />}
          title="Info"
          children={[
            {
              title: 'ShieldDao Website',
              href: 'https://shielddao.app',
            },
          ]}
        />
        <NavItem
          href="/"
          icon={<MoreIcon className="icon" />}
          title="More"
          children={[
            {
              title: 'ShieldDao Website',
              href: 'https://shielddao.app',
            },
            {
              title: 'Github',
              href: 'https://github.com/shieldDao/',
            },
            {
              title: 'Docs',
              href: 'https://docs.shielddao.app',
            },
            {
              title: 'Blog',
              href: 'https://shielddao.medium.com',
            },
          ]}
        />
      </ul>
    </StyledNav>
  );
};

export default NavLinks;
