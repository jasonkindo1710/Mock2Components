import './App.css';
import TopBar from './Components/Bar/TopBar';
import CartPopup from './Components/Product/CartPopup';
import FreeShipping from './Components/Product/FreeShipping';
import ItemInCart from './Components/Product/ItemInCart';
import NavTabs from './Components/Product/NavTabs';
import PaginationComponent from './Components/Product/Pagination';
import ProductCard from './Components/Product/ProductCard';
import ProductDetailBar from './Components/Product/ProductDetailBar';
import Rating from './Components/Product/Rating';
import RelatedProducts from './Components/Product/RelatedProduct';
import Review from './Components/Product/Review';
import Stars from './Components/Product/Stars';
import WriteReview from './Components/Product/WriteReview';

function App() {
  return (
    <div className="h-[3000px] px-14 py-14 bg-[#E5E5E5] grid grid-rows-4 ">
      {/* <ProductCard /> */}
      {/* <CartPopup/> */}
      {/* <FreeShipping /> */}
      {/* <RelatedProducts /> */}
      {/* <ItemInCart /> */}
      {/* <NavTabs />
      <Stars />
      <Rating /> */}
      {/* <PaginationComponent /> */}
      <ProductDetailBar />
      <Review />
      
      <WriteReview />
      {/* <TopBar /> */}
    </div>
  );
}

export default App;
