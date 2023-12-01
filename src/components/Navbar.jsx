import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.length);

  return (
    <div className="navbar-container">
      <p>My Shop</p>
      <div>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartItems}</span>
      </div>
    </div>
  );
};

export default Navbar;
