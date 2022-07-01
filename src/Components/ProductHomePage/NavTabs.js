import { useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Redux/Products/actions";
import { selectAllProducts } from "../../Redux/Products/selectors";
const NavTabs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getCategories(dispatch)
  }, [])

  const products = useSelector(selectAllProducts);
  const category = products[0].category
  
  return (
    <div className="w-[1440px] h-[50px] bg-[#FFFBFB] relative">
      <div className="absolute top-[14px] left-[159px]  flex ">
        <p className="title-navtab w-[42px]">Home</p>
        <RiArrowRightSLine size={20} color="#6C757D" className="ml-[4.5px] mt-[2px]" />
        <p className="title-navtab w-[70px] ml-[4.5px]">{category}</p>
      </div>
    </div>
  );
};

export default NavTabs;
