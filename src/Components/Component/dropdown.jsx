import React from "react";
import {RiArrowDownSLine} from "react-icons/ri"

function Dropdown() {
  return (
    <div className="mt-[100px] ml-[100px]">
      <button
        className="relative flex justify-center items-center bg-white border focus:outline-none shadow-image
        text-gray-600 rounded focus:ring ring-gray-200 group
        "
      >
          <p className="px-4">Dropdown</p>
          <span className="border-l p-2 hover:bg-gray-100">
            <RiArrowDownSLine className="" />
          </span>
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
            <ul className="text-left border rounded focus:bg-[#C4C4C4] cursor-pointer">
                <li className="px-4 py-1 focus:bg-[#C4C4C4] border-b cursor-pointer">menu list 1</li>
                <li className="px-4 py-1 focus:bg-[#C4C4C4] border-b cursor-pointer">menu list 2</li>
                <li className="px-4 py-1 focus:bg-[#C4C4C4] border-b cursor-pointer">menu list 3</li>
            </ul>
          </div>
      </button>
    </div>
  );
}

export default Dropdown;
