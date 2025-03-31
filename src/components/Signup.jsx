import React, { useState } from "react";
import { IoLockClosed, IoLockOpen, IoMail, IoPerson } from "react-icons/io5";
import axios from "axios";
import { SERVER_URL } from "../../config";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const Signup = () => {
  const { setAuthUserData } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast("Please fill the form");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    try {
      const { email, name, password } = formData;
      const dataToSend = { email, name, password };
      const response = await axios.post(
        `${SERVER_URL}/user/signup`,
        dataToSend,
        { withCredentials: true }
      );
      console.log("Signup successful:", response.data);
      toast.success("Signup successful!");
      localStorage.setItem("messanger", JSON.stringify(response.data));
      setAuthUserData(response.data);
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 w-full min-h-screen">
      <div className="p-6 max-w-md w-full border rounded-lg shadow-lg bg-white mx-1">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-2 text-center">
            Create a new account
          </h1>
          <h2 className="text-sm text-gray-500 mb-6 text-center">
            It's free and always will be
          </h2>

          <div className="space-y-4">
            <label className="border border-gray-500 flex items-center gap-2 p-2 rounded">
              <IoMail />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="border-none focus:outline-none flex-1"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label className="border border-gray-500 flex items-center gap-2 p-2 rounded">
              <IoPerson />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-none focus:outline-none flex-1"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label className="border border-gray-500 flex items-center gap-2 p-2 rounded">
              <IoLockOpen />
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="border-none focus:outline-none flex-1"
                value={formData.password}
                onChange={handleChange}
              />
            </label>

            <label className="border border-gray-500 flex items-center gap-2 p-2 rounded">
              <IoLockClosed />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="border-none focus:outline-none flex-1"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Sign Up
          </button>

          {/* Login and Forgot Password Links */}
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
