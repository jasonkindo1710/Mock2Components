import Product from "../../Assets/ProductPhoto.svg"
const ItemInCart = () => {
    return ( 
        <div className="w-[1151px] h-[184px] rounded-[5px] bg-[#FFFFFF]">
            <div className="h-[50px] bg-[#C4C4C4] rounded-t-[5px] relative">
                <div className="absolute top-[15px] left-[64px] right-[91px] flex">
                    <p className="title-cart w-[45px]">Image</p>
                    <p className="title-cart w-[57px] ml-[88px]">Product</p>
                    <p className="title-cart w-[38px] ml-[383px]">Price</p>
                    <p className="title-cart w-[61px] ml-[154px]">Quantity</p>
                    <p className="title-cart w-[36px] ml-[134px]">Total</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute top-[14px] left-[27px] right-[64px] flex">
                    <img src={Product} alt="" className="w-[119px] h-[108px] rounded-[5px]"/>
                    <p className="font-sans font-bold text-[24px] ml-[48px] mt-[34px] w-[159px] h-[28px] ">Adidas Store</p>
                    <p className="font-roboto font-bold text-[24px] ml-[270px] mt-[34px]">$120.00</p>
                    <div className="w-[162.37px] h-[42.08px] bg-[#E2E4E5] border border-solid border-[#959595] ml-[77px] mt-[30px] rounded-[5px] flex">
                        <button className="flex-1 text-[#33A0FF] text-[24px] ">-</button>
                        <p className="flex-1 font-roboto text-[24px] font-light text-center py-[4px]">1</p>
                        <button className="flex-1 text-[#33A0FF] text-[24px]">+</button>
                    </div>
                    <p className="w-[90px] h-[28px] font-roboto font-bold text-[24px] ml-[56.63px] mt-[34px]">$120.00</p>
                    
                </div>
            </div>
        </div>
     );
}
 
export default ItemInCart;