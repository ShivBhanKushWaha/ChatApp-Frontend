import React from "react";

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("messanger"));
  const itsMe = message.senderId === authUser.user._id;

  const chatAlignment = itsMe ? "items-end" : "items-start"; // Align text properly
  const chatColorAndSide = itsMe
    ? "bg-blue-400 rounded-br-none"
    : "bg-gray-400 rounded-bl-none";
  
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`p-2 flex flex-col ${chatAlignment}`}>
      <div className={`text-white px-3 py-1 rounded-lg max-w-sm text-base ${chatColorAndSide}`}>
        {message.message}
      </div>
      <p className="text-[10px] text-gray-500 mt-1">{formattedTime}</p>
    </div>
  );
};

export default Message;
