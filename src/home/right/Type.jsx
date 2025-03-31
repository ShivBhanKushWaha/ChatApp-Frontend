import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useConversation from "../../stateManage/useConversation.js";
import useSendMessage from "../../context/useSendMessage.js";
const Type = () => {
  const { sendMessages } = useSendMessage();
  const { selectedConversation } = useConversation();
  const [message,setMessage] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("")
  }
  return (
    <>
      {selectedConversation ? (
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3 h-[8vh] text-center bg-slate-800 ">
          <label className="border-[1px] border-gray-700 bg-slate-700 rounded-xl flex items-center gap-2 w-[80%] p-3 mx-4 my-1">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="grow outline-none"
              placeholder="Type here"
            />
          </label>
          <button type="submit">
            <IoSend className="text-3xl" />
          </button>
        </div>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default Type;
