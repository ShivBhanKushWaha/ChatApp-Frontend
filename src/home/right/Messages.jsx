import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "/src/components/Loading.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useGetSocketMessage(); // listening new message
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" }); // Fixed typo
      }
    }, 100);
  }, [messages]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="" style={{ minHeight: "calc(88vh - 8vh)" }}>
          {Array.isArray(messages) && messages.length > 0 ? (
            messages.map((message, index) => (
              <div
                key={message._id}
                ref={index === messages.length - 1 ? lastMessageRef : null}
              >
                <Message message={message} />
              </div>
            ))
          ) : (
            <div>
              <p className="text-center mt-[20%] font-bold">Say! hii</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Messages;
