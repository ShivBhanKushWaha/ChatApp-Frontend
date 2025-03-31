import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider.jsx";
import { io } from "socket.io-client";

const SocketContext = createContext(); // Capitalize context name for convention

// Custom hook to access socket context
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { authUserData } = useAuth();
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUserData?.user?._id) {
      // Connect to backend URL only if userId exists
      const newSocket = io("http://localhost:5001", {
        query: { userId: authUserData.user._id },
        transports: ["websocket", "polling"], // Handle different connection methods
      });

      setSocket(newSocket);

      // Listen for the online users list from the server
      newSocket.on("getOnline", (users) => {
        console.log("Online users:", users);
        setOnlineUsers(users);
      });

      // Cleanup function to close socket connection on component unmount or logout
      return () => {
        newSocket.disconnect(); // Proper disconnection
      };
    } else {
      if (socket) {
        socket.disconnect(); // Avoid duplicate socket connections on logout
        setSocket(null);
      }
    }
  }, [authUserData?.user?._id]); // Re-run when userId changes

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
