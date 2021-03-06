import React, { useEffect, useState } from "react";
import Categories from "../Bar/CategoriesBar";
import TopBar from "../Component/TopBar";
import {
  selectAccessToken,
  selectAuth,
  selectUserID,
} from "../../Redux/Auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { selectNewCart } from "../../Redux/Cart/selectors";
import ProductCard from "../Component/ProductCard";
import ProfileBanner from "../Component/ProfileBanner";
import { selectAllProducts, selectProduct } from "../../Redux/Product/selectors";
import StarRatings from "react-star-ratings";
import { BsCartPlus } from "react-icons/bs";
import { getAllProducts, getSingleProduct } from "../../Redux/Product/actions";
import { useNavigate } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  const userID = useSelector(selectUserID);
  const accessToken = useSelector(selectAccessToken);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(30);
  useEffect(() => {
    getAllProducts(dispatch, page, size);
  }, [])

  const products = useSelector(selectAllProducts);
  console.log(products)
  const handleClick = async (id) => {
    await getSingleProduct(dispatch, id);
    navigate("/productdetail");
  };
  const [noOfElement, setNoOfElement] = useState(7);
  const slice = products?.slice(0, noOfElement);

  return (
    <div>
      <header>
        <TopBar />
      </header>
      <div className="absolute top-[170px]">
        <Categories />
      </div>
      <div></div>
      <div className="absolute top-[800px]">
        <ProfileBanner className="mt-[19px]" noOfElement={noOfElement} setNoOfElement={setNoOfElement} />
        <div className="mt-[19px] w-[1200px] grid grid-cols-4 gap-4">
        {slice?.filter((item) => parseInt(item.rating) === 5).map((product) => (
          <div
            key={product.id}
            className="w-[285px] h-[395px]  border border-solid border-[#B4B1B1] rounded-[5px] bg-[#FFFFFF]"
          >
            <img
              src={product.images[0].url}
              alt=""
              className="w-[254px] h-[200px] mt-[8px] mx-auto rounded-[5px] shadow-image cursor-pointer"
              onClick={() => handleClick(product.id)}
            />
            <div className="ml-[17px] mr-[26px] mt-[15px]">
              <div className="w-[254x] h-[37px] mr-[68px]">
                <p className="font-sans text-[29px] w-[254px] h-[37px] leading-[36.8px] font-bold hover:underline hover:underline-offset-1 ">
                  {product.name}
                </p>
              </div>
              <div className="w-[212px] h-[28px] mr-[68px] mb-[5px]">
                <p className="font-sans text-[18px] font-semibold">
                  ID: {product.id}
                </p>
              </div>
              <div className="flex h-[18px] mb-[10px]">
                <StarRatings
                  rating={parseInt(product.rating)}
                  starRatedColor="#FFD333"
                  starDimension="20px"
                  starSpacing="0"
                />
                <p className="text-[#D70000] ml-[69px] mt-[-3px] font-sans text-[16px] font-semibold">
                  50% Off
                </p>
              </div>

              <div className="flex h-[28px] mb-[10px]">
                <p className="font-sans text-[24px] font-semibold">
                  $ {product.price}
                </p>
                <BsCartPlus className="ml-[118px] w-[31px] h-[28px] mt-[3px] text-[#212529] cursor-pointer" />
              </div>

              <button
                className="w-[98px] h-[24px] text-white text-[14px] 
      font-Almarai rounded-full bg-[#00A71180] cursor-default
      border border-solid border-[#00CA14]
       "
              >
                Available
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
