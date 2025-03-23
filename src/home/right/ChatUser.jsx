import React from "react";

const ChatUser = () => {
  return (
    <>
      <div className="flex space-x-4 pl-5 pt-5 pb-5 bg-gray-900 hover:bg-gray-600 duration-300 h-[12vh]">
      <div>
        <div className="avatar avatar-online">
          <div className="w-14">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">Shivbhan Kuhwaha</h1>
        <span className="text-sm">Online</span>
      </div>
      </div>
    </>
  );
};

export default ChatUser;
