import React, { useEffect, useState } from "react";
import useConversation from "../stateManage/useConversation.js";
import axios from "axios";
import { SERVER_URL } from "../../config";
import Cookies from "js-cookie";
const useGetMessage = () => {
  const [loading, setLoading] = useState(true);

  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (selectedConversation && selectedConversation._id) {
        console.log("Selected conversation ID:", selectedConversation._id);

        try {
          const token = Cookies.get("token");
          console.log("Token:", token); // Debugging token

          const response = await axios.get(
            `${SERVER_URL}/message/get/${selectedConversation._id}`,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setMessages(response.data);
          console.log("Chat message:", response.data);
          setLoading(false);
        } catch (error) {
          console.log("Error in getting message");
          if (error.response) {
            console.log("Response Error:", error.response.data);
          } else if (error.request) {
            console.log("Request Error (No Response):", error.request);
          } else {
            console.log("General Error:", error.message);
          }
        }
      } else {
        console.log("No selected conversation or invalid ID.");
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
