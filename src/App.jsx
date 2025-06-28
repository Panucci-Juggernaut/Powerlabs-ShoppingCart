import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Coupon from './components/Coupon';
import './index.css';

function App() {

  const [cart, setCart] = useState({});
  const [discount, setDiscount] = useState(0);

  return (
    <div className="app">
      <h1>React Shopping Cart</h1>
      <ProductList setCart={setCart} />
      <Cart
        cart={cart}
        setCart={setCart}
        discount={discount}
      />
      <Coupon setDiscount={setDiscount}/>
    </div>
  );
}

export default App;