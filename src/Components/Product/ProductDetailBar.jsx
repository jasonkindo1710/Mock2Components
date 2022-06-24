const ProductDetailBar = () => {
    return ( 
        <div className="w-[1151px] h-[50px] bg-[#FFFFFF] relative">
            <div className="absolute left-[319px] h-[50px] font-roboto font-bold text-[20px] flex  ">
                <button className=" text-center w-[161px] hover:bg-[#E7E2E2] hover:border-b-[1.5px] hover:border-[#FFD333]">Description</button>
                <button className=" text-center w-[161px] hover:bg-[#E7E2E2] hover:border-b-[1.5px] hover:border-[#FFD333] ml-[30px]">Specification</button>
                <button className=" text-center w-[131px] hover:bg-[#E7E2E2] hover:border-b-[1.5px] hover:border-[#FFD333] ml-[30px]">Reviews</button>
            </div>
        </div>
     );
}
 
export default ProductDetailBar;