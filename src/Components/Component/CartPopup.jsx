import Product from "../../Assets/ProductPhoto.svg"
const CartPopup = () => {
    return ( 
        <div className="w-[338px] h-[256px] rounded-[5px] bg-[#FFFFFF]
            shadow-md relative">
            <div className="flex absolute top-[18px] left-[16px] right-[16.32px]">
                <img src={Product} className="w-[81.12px] h-[64.18px] 
                rounded-[5px]" alt="" />
                <div className="ml-[16.7px] mt-[7.63px] w-[180.8px] h-[22.46]">
                    <p className="font-sans font-semibold text-[18px]">Adidas Shoes</p>
                    <p className="font-sans text-[16px]">1 x <span className="font-semibold">$120.00</span></p>
                </div>
                <button className="text-[#818181] text-[18px] font-semibold ml-[16.7px] ">x</button>
            </div>
            <hr className="absolute top-[94px] w-[338px] border border-solid border-[#959292]" />
         
            <div className="absolute top-[106px] left-[18px] right-[15px]">
                <div className="flex">
                    <p className="title-left">Subtotal</p>
                    <p className="title-right">$120.00</p>
                </div>
                <div className="flex">
                    <p className="title-left">Shipping</p>
                    <p className="title-right">$10.00</p>
                </div>
                <div className="flex"> 
                    <p className="title-left">Total</p>
                    <p className="title-right">$130.00</p>
                </div>
            </div>
            <div className="flex absolute top-[207px] left-[16px] right-[17px]">
                <button className="button-product bg-[#C4C4C4]">View Cart</button>
                <button className="button-product bg-[#FFD333] ml-[60px]">Checkout</button>
            </div>
        </div>
     );
}
 
export default CartPopup;