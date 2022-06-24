import React from "react";
import { BsCartPlus } from "react-icons/bs";
import star from "../../Assets/Stars.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectAllProducts } from "../../Redux/Products/selectors";
import { getAllProducts } from "../../Redux/Products/ApiRequest";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

function Homepage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  const Next = () => {
    setNum(++num);
  };
  const Back = () => {
    num > 1 && setNum(--num);
  };

  useEffect(() => {
    getAllProducts(dispatch, page);
  }, []);

  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[305px] h-[395px]  border border-solid border-[#B4B1B1] rounded-[5px] bg-[#FFFFFF]"
          >
            <img
              src={product.images[0].url}
              alt=""
              className="w-[254px] h-[200px] mt-[8px] mx-auto rounded-[5px] shadow-image cursor-pointer"
            />
            <div className="ml-[25px] mr-[26px] mt-[15px]">
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
                {/* <AiFillStar className="border border-solid border-[#B6B6B6]"/> */}
                <img src={star} alt="" className="star ml-[0px]" />
                <img src={star} alt="" className="star" />
                <img src={star} alt="" className="star" />
                <img src={star} alt="" className="star" />
                <img src={star} alt="" className="star" />

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
      <div className="mx-auto w-screen flex justify-center my-[20px]">
        <div className="flex w-[230px] h-[32px] ">
          <button
            onClick={Back}
            className={`w-[32px] h-[32px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] flex justify-center align-middle
                hover:bg-[#919EAB] hover:text-[#FFD333]
                    `}
          >
            <RiArrowLeftSLine size={20} className="my-auto" />
          </button>
          {pages.map((pg, i) => (
            <button
              key={i}
              onClick={() => {
                setCur(pg.page)
                
                }}
              className={`w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] 
                ${cur === pg.page && " bg-yellow-400"}`}
            >
              {pg.page}
            </button>
          ))}
          <button
            onClick={Next}
            className="w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px]  hover:bg-[#919EAB] hover:text-[#FFD333] flex justify-center align-middle"
          >
            <RiArrowRightSLine size={20} className="my-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
