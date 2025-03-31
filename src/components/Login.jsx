import React, {  } from "react";
import { IoLockOpen, IoMail, IoPerson, IoWatch } from "react-icons/io5";
import { SERVER_URL } from "../../config";
// import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
   const {setAuthUserData} = useAuth()
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
        email: data.email,
        password: data.password
    }
    await axios.post(`${SERVER_URL}/user/login`,userInfo,{ withCredentials: true }).then((response) => {
        toast.success("Login successfully")
        console.log(response.data)
        localStorage.setItem("messanger",JSON.stringify(response.data))
        setAuthUserData(response.data)
    }).catch((err) => {
        toast.error('Login failed')
        console.log("login failded",err)
    })
  }


  return (
    <div className="flex items-center justify-center bg-gray-100 w-full min-h-screen">
      <div className="p-6 max-w-md w-full border rounded-lg shadow-lg bg-white mx-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold mb-6 text-center">
            Login your account
          </h1>

          <div className="space-y-4">
            <div>
              <label className="border border-gray-500 flex items-center gap-2 p-2 rounded">
                <IoMail />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border-none focus:outline-none flex-1"
                  {...register("email", { required: "This field is required" })}
                />
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label className="border border-gray-500 flex items-center gap-2 p-2 rounded">
                <IoLockOpen />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border-none focus:outline-none flex-1"
                  {...register("password", {  required: "This field is required",
                    minLength: {
                      value: 5,
                      message: "Password length must be at least 5 characters",
                    } })}
                />
              </label>
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Login
          </button>

          {/* Login and Forgot Password Links */}
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
