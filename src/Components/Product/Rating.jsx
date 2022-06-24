import Stars from "./Stars"
const Rating = () => {
    return ( 
        <div className="w-[394px] h-[41px] bg-[#FFFFFF] relative">
            <div className="absolute left-[17px] top-[11px] flex">
                <Stars />
                <div className="flex my-[-3px] font-roboto font-bold text-[#565353] text-[16px]">
                <p className="mx-[13px]">|</p>
                <p className="mt-[1.5px] w-[92px] h-[19px]">150 Reviews</p>
                <p className="mx-[13px]">|</p>
                <p className="mt-[1.5px] w-[54px] h-[19px]">3k Sold</p>
                </div>
                
            </div>
        </div>
     );
}
 
export default Rating;