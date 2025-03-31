import React, { useState } from "react";
import { TbLogout } from "react-icons/tb";
import { SERVER_URL } from "../../../config";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";

const Logout = () => {
     const {setAuthUserData} = useAuth()
  const [loading,setLoading] = useState(true)
  const handleLogOut = async() => {
    try{
      const res = await axios.post(`${SERVER_URL}/user/logout`,{ withCredentials: true });
      localStorage.removeItem("messanger")
      Cookies.remove("token")
      setLoading(false)
      toast.success("Logout successfully")
      setAuthUserData(undefined)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end items-center">
      <div className="p-3 align-baseline">
        <button onClick={handleLogOut}>
          <TbLogout className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
        </button>
      </div>
    </div>
  );
};

export default Logout;
