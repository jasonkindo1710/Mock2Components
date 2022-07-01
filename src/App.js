import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Login from "./Components/LoginPage/Login"

import Productpage from './Components/ProductHomePage/ProductPageCategory';
import ProductDetail from './Components/ProductPage/ProductDetail';
import ShoppingCart from './Components/CartCheckout/ShoppingCart';
import Checkout from './Components/CartCheckout/Checkout';
import Main from './Components/HomePage/Main'
import SuccessPage from './Components/CartCheckout/SuccessPage';
import OrderList from './Components/AdminPage/OrderList';
import OrderDetail from './Components/AdminPage/OrderDetail';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productpage" element={<Productpage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<SuccessPage />} />
        {/* Admin */}
        <Route path='/admin/order' element={<OrderList />} />
        <Route path='/admin/order/orderdetail' element={<OrderDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
