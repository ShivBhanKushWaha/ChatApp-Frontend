import React from "react";
import { IoSend } from "react-icons/io5";

const Type = () => {
  return (
    <>
      <div className="flex space-x-3 h-[8vh] text-center bg-slate-800 ">
        <label className="border-[1px] border-gray-700 bg-slate-700 rounded-xl flex items-center gap-2 w-[80%] p-3 mx-4 my-1">
          <input
            type="text"
            className="grow outline-none"
            placeholder="Type here"
          />
        </label>
        <button>
          <IoSend className="text-3xl"/>
        </button>
      </div>
    </>
  );
};

export default Type;
