import styled from 'styled-components';
import { ReactComponent as TwitterIcon } from '../../static/svg/twitter.svg';
import { ReactComponent as TelegramIcon } from '../../static/svg/telegram.svg';

const SFooter = styled.div`
  padding: 20px 15px;
  border-top: 2px solid #f3f3f3;

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      padding: 0 6px;

      &:hover {
        svg {
          fill: #000;
          transform: scale(1.1);
        }
      }
    }
  }

  svg {
    width: 26px;
    height: 26px;
  }
`;

const SidebarFooter = () => {
  return (
    <SFooter>
      <div className="socials">
        <a
          href="https://twitter.com/shieldDAO"
          rel="me noreferrer external"
          target="_blank"
        >
          <TwitterIcon className="icon" />
        </a>
        <a
          href="https://t.me/ShieldDAO"
          rel="me noreferrer external"
          target="_blank"
        >
          <TelegramIcon className="icon" />
        </a>
      </div>
    </SFooter>
  );
};

export default SidebarFooter;
