import React from "react";
import Images from '../Images/index'
const Navbar = () => {
  return (
    <div className="flex items-center w-full h-14 text-orange-600">
      <div className="flex items-center gap-3 text-2xl md:text-4xl font-semibold pl-3 md:pl-10">
        <div className="font-[Phudu]">Iron Paradise</div>
        <div className="bg-white rounded-full"><img src={Images.logo} className="w-10 h-10 rounded-full object-cover" alt="" /></div>
      </div>
    </div>
  );
};
export default Navbar;
