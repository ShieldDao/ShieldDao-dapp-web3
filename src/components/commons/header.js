import { Button } from 'antd';
import { ReactComponent as Expand } from '../../static/svg/expand.svg';
const Header = () => {
  return (
    <header id="site_header" className="site-header">
      <Button type="default">
        <Expand />
      </Button>
    </header>
  );
};

export default Header;
