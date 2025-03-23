import React from "react";
import { TbLogout } from "react-icons/tb";
const Logout = () => {
  return (
    <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end items-center">
      <div className="p-3 align-baseline">
        <button>
          <TbLogout className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
        </button>
      </div>
    </div>
  );
};

export default Logout;
