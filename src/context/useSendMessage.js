import React, { useState } from "react";
import useConversation from "../stateManage/useConversation.js";
import { SERVER_URL } from "../../config";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(true);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessages = async (message) => {
    
    if (message && selectedConversation && selectedConversation._id) {
      console.log("Selected message:", message);
      console.log("Selected conversation ID:", selectedConversation._id);

      try {
        const token = Cookies.get("token");
        console.log("Token:", token);

        const response = await axios.post(
          `${SERVER_URL}/message/send/${selectedConversation._id}`,
          { message },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Append the entire new message object instead of just the text
        setMessages([...messages, response.data.newMessage]);
        console.log("Chat message:", response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in sending message");
        if (error.response) {
          console.log("Response Error:", error.response.data);
        } else if (error.request) {
          console.log("Request Error (No Response):", error.request);
        } else {
          console.log("General Error:", error.message);
        }
      }
    } else {
       toast.error("Message can not empty")
      console.log("No selected conversation or invalid ID.");
    }
  };

  return { loading, sendMessages }; // Return function without calling it
};

export default useSendMessage;
