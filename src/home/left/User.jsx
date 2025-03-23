import React from "react";

const User = () => {
  return (
    <div>
      <div className="flex space-x-4 items-center px-6 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-14">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Shivbhan Kushwaha</h1>
          <span>shiv@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default User;
