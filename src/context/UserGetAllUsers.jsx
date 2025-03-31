import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import { SERVER_URL } from "../../config";

const useUserGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = Cookies.get("token");
        const response = await axios.get(`${SERVER_URL}/user/getUserProfile`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the request if required
          },
        });
        setAllUsers(response.data.filterAllUser ); // Assuming response.data contains user data
      } catch (error) {
        console.log("Error in UserGetAllUsers: ", error);
        toast.error("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    getUsers(); // Call the async function
  }, []);

  console.log(allUsers);

  return [allUsers, loading]; // Return users and loading state as an array (like a hook)
};

export default useUserGetAllUsers;
