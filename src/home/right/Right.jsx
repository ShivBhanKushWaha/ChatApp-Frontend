import React from "react";
import ChatUser from "./ChatUser";
import Type from "./Type";
import Messages from "./Messages";
import useConversation from "../../stateManage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";

const Right = () => {
  const { selectedConversation } = useConversation();
  const { authUserData } = useAuth();
  return (
    <div className="w-full bg-gray-900 text-white">
      {" "}
      {selectedConversation ? (
        <>
          <ChatUser />
          <div
            className="overflow-auto"
            style={{ maxHeight: "calc(88vh - 8vh)" }}
          >
            <Messages />
          </div>
          <Type />
        </>
      ) : (
        <>
          <div className="h-full flex justify-center items-center">
            <div className="text-center">
              <h1 className="font-bold">No Conversation Selected</h1>
              <p className="font-bold">Select a conversation to start chat</p>
              <p>{authUserData.user.name}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Right;
