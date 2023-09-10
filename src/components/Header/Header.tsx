import Brand from './Brand/Brand';
import InputSearch from './InputSearch/InputSearch';
import NavBar from './NavBar/NavBar';
import { Header } from './styles';

function HeaderBar() {
  return (
    <Header>
      <Brand brand="Brand" />
      <InputSearch />
      <NavBar />
    </Header>
  );
}

export default HeaderBar;
