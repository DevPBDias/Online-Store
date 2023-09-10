import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderBar from '../Header/Header';
import { Body } from './styles';

function Layout() {
  return (
    <Body>
      <HeaderBar />
      <Outlet />
      <Footer />
    </Body>
  );
}

export default Layout;
