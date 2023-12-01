import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleBuyClick = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => handleBuyClick(product._id)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
