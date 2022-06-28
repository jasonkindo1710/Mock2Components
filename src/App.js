import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login"
import Homepage from "./Components/ProductHomePage/HomePageAll"
import Productpage from './Components/ProductHomePage/HomePageCategory';
import ProductDetail from './Components/ProductPage/ProductDetail';
import ShoppingCart from './Components/CartCheckout/ShoppingCart';
import Checkout from './Components/CartCheckout/Checkout';
import Main from './Components/HomePage/Main'
import SuccessPage from './Components/CartCheckout/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productpage" element={<Productpage/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
