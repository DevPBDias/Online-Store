import { Link } from 'react-router-dom';
import profile from '../../../assets/Profile.png';
import cart from '../../../assets/Cart.png';
import message from '../../../assets/Message.png';
import orders from '../../../assets/Orders.png';

function NavBar() {
  return (
    <div>
      <Link to="/profile">
        <img src={ profile } alt="" />
      </Link>
      <Link to="/cart">
        <img src={ cart } alt="" />
      </Link>
      <Link to="/message">
        <img src={ message } alt="" />
      </Link>
      <Link to="/orders">
        <img src={ orders } alt="" />
      </Link>
    </div>
  );
}

export default NavBar;
