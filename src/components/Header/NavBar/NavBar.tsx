import { Link } from 'react-router-dom';
import profile from '../../../assets/Profile.png';
import cart from '../../../assets/Cart.png';
import message from '../../../assets/Message.png';
import orders from '../../../assets/Orders.png';
import { Container, Image } from './styles';

function NavBar() {
  return (
    <Container>
      <Link to="/profile">
        <Image src={ profile } alt="" />
      </Link>
      <Link to="/cart">
        <Image src={ message } alt="" />
      </Link>
      <Link to="/message">
        <Image src={ orders } alt="" />
      </Link>
      <Link to="/orders">
        <Image src={ cart } alt="" />
      </Link>
    </Container>
  );
}

export default NavBar;
