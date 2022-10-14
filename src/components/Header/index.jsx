import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import Logo from './Logo';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => (
  <header>
    <div className="container d-md-flex d-none pt-3 align-items-center justify-content-between">
      <Logo />
      <MenuDesktop />
    </div>
    <div className="dark-bg-color">
      <div className="container d-md-none">
        <div className="d-flex justify-content-between pt-4 ms-3 me-3">
          <Logo />
          <a className="text-decoration-none light-text-color fs-2">
            <AiOutlineMenu />
          </a>
        </div>
        <MenuMobile />
      </div>
    </div>
  </header>
);

export default Header;
