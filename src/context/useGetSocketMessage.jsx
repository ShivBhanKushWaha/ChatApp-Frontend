import { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../stateManage/useConversation.js";
import sound from "../assets/notification.mp3";
const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { setMessages } = useConversation(); // Access setMessages directly from Zustand

  useEffect(() => {
    if (!socket) return;

    // Handle incoming socket messages
    const handleNewMessage = (newMessage) => {
      console.log("📩 New message from socket:", newMessage);
      const notification = new Audio(sound);
      notification.play();
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage); // Cleanup listener on unmount
    };
  }, [socket, setMessages]); // Removed `messages` from the dependency array

  return {}; // Return any state if needed
};

export default useGetSocketMessage;
