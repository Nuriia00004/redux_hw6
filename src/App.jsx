import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import products from './data/products.json';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <ProductList products={products} /> 
        <ShoppingCart />
      </div>
    </Provider>
  );
};

export default App;
