import React from "react";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import Logout from "./home/left1/Logout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const { authUserData } = useAuth();
  console.log(authUserData);

  console.log(authUserData);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUserData ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/signup"
          element={authUserData ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={authUserData ? <Navigate to={"/"} /> : <Login />}
        />
      </Routes>
    </>
  );
};

export default App;
