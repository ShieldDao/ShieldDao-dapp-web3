import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowDownIcon } from '../../static/svg/arrow-down.svg';

const StyledButtonText = styled.span`
  flex-grow: 1;
  margin-left: 8px;
`;

const NavItem = ({ initIsOpen, href, title, icon, children, maxHeight }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(initIsOpen);

  return (
    <li role="button" className={`${isOpen ? 'shown' : ''}`}>
      <NavLink
        onClick={(e) => {
          if (children?.length) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        isActive={() => pathname === href}
        to={href}
      >
        {icon}
        <StyledButtonText>{title}</StyledButtonText>
        {children?.length && <ArrowDownIcon className="icon arrow-down" />}
      </NavLink>

      {children?.length && (
        <ul>
          {children.map((child, i) => (
            <li key={i}>
              {child.href.substr(0, 4) === 'http' ? (
                <a href={child.href} rel="noreferrer" target="_blank">
                  {child.title}
                </a>
              ) : (
                <NavLink
                  isActive={() => pathname === child.href}
                  to={child.href}
                >
                  <StyledButtonText>{child.title}</StyledButtonText>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
