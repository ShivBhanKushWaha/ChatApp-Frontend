import React from "react";
import ChatUser from "./ChatUser";
import Type from "./Type";
import Messages from "./Messages";

const Right = () => {
  return (
    <div className="w-[70%] bg-gray-900 text-white">
      <ChatUser />
      <div className="overflow-auto" style={{ maxHeight:"calc(88vh - 8vh)" }}>
        <Messages />
      </div>
      <Type />
    </div>
  );
};

export default Right;
