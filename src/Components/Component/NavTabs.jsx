import { useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Redux/Products/actions";
import { selectAllCategories } from "../../Redux/Products/selectors";
const NavTabs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getCategories(dispatch)
  }, [])
  const category = useSelector(selectAllCategories)
  
  return (
    <div className="w-[1440px] h-[50px] bg-[#FFFBFB] relative mx-auto">
      <div className="absolute top-[14px] left-[159px]  flex ">
        <p className="title-navtab w-[42px]">Home</p>
        <RiArrowRightSLine size={20} color="#6C757D" className="ml-[4.5px] mt-[2px]" />
        <p className="title-navtab w-[44px] ml-[4.5px]">Shoes</p>
        <RiArrowRightSLine size={20} color="#6C757D" className="ml-[4.5px] mt-[2px]" />
        <p className="title-navtab w-[100px] ml-[4.5px]">Adidas Shoes</p>
      </div>
    </div>
  );
};

export default NavTabs;
