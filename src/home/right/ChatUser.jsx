import React from "react";
import useConversation from "../../stateManage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const ChatUser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId)? "Online" : "Offline"
  }
  return (
    <>
      {selectedConversation ? (
        <div className="flex space-x-4 pl-5 pt-5 pb-5 bg-gray-900 hover:bg-gray-600 duration-300 h-[12vh]">
          <div>
            <div className="relative w-14 h-14">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="rounded-full w-full h-full"
                alt="User Avatar"
              />
              {/* Online Indicator */}
              { getOnlineUserStatus(selectedConversation._id) === "Online" && (
                <span className="absolute top-1 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </div>
          </div>
          <div>
            <h1 className="text-xl">{selectedConversation.name}</h1>
            <span className="text-sm">{getOnlineUserStatus(selectedConversation._id)}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ChatUser;
