import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((itemId) => (
          <li key={itemId}>Item {itemId}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
