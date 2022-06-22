import './App.css';
import CartPopup from './Components/Product/CartPopup';
import FreeShipping from './Components/Product/FreeShipping';
import ProductCard from './Components/Product/ProductCard';
import RelatedProducts from './Components/Product/RelatedProduct';

function App() {
  return (
    <div className="h-[2000px] px-14 py-14 bg-[#E5E5E5] grid grid-rows-4 ">
      <ProductCard />
      <CartPopup/>
      <FreeShipping />
      <RelatedProducts />
    </div>
  );
}

export default App;
