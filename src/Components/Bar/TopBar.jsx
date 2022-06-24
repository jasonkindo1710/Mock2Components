import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="relative w-[1440px] h-[159.04px] bg-mainbar">
      <div className="w-[1440px] h-[38px] bg-menutopbar flex items-center">
        <a href="#" className="absolute text-[16px] ml-[163px]">
          About Us
        </a>
        <a href="#" className="absolute text-[16px] ml-[244.13px]">
          Contacts
        </a>
        <a href="#" className="absolute text-[16px] ml-[323.23px]">
          Store
        </a>
        <a href="#" className="absolute text-[16px] ml-[376.97px]">
          Track Orders
        </a>
      </div>
      <div className="flex mt-[36px] items-center">
        <p className="font-bold font-redrose text-[36px] ml-[163px]">
          SHOP APP
        </p>
        <div className="w-[748px] flex bg-[#C4C4C4] ml-[29.34px] h-[50.35px] items-center rounded-[5px] justify-between">
          <div className="flex items-center">
            <HiOutlineMenuAlt1 className="justify-center text-[30px] text-[#4B4B4B] " />
            <p className="font-bold text-[25px] text-[#4B4B4B] pr-[12px] border-r-[1px]">
              Categories
            </p>
            <input
              type="search"
              className="ml-[12px] h-[29px] w-[270px] bg-[#C4C4C4] text-[#4B4B4B] border-none"
              placeholder="Search Items"
            />
          </div>
          <BiSearch className="text-[30px] cursor-pointer text-[#4B4B4B] mr-[9.37px]" />
        </div>
        <MdOutlineShoppingCart className="text-[40px] ml-[30px]" />
        <FiUser className="text-[40px] ml-[32.14px]" />
      </div>
    </div>
  );
};

export default TopBar;
