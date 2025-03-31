import React from "react";
import { useAuth } from "../context/AuthProvider";

const NoChat = () => {
  const {authUserData} = useAuth();
  console.log(authUserData)
  return (
    <>
      <div className="flex h-screen items-center justify-center flex-col">
        <h1 className="text-center">No Conversation Selected</h1>
        <p className="text-center">Selest a conversation to start a chat.</p>
        {authUserData.user.name}
      </div>
    </>
  );
};

export default NoChat;
