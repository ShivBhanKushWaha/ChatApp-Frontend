import React from "react";
import User from "./User";
import useUserGetAllUsers from "../../context/UserGetAllUsers.jsx"; // Import the custom hook

const Users = () => {
  const [allUsers, loading] = useUserGetAllUsers(); // Use the custom hook

  console.log("All Users:", allUsers, "Loading:", loading);

  return (
    <div style={{ maxHeight: "calc(80vh)" }} className="overflow-auto my-1">
      {!loading ? (
        allUsers.length > 0 ? (
          allUsers.map((user, index) => <User key={index} user={user} />)
        ) : (
          <p>No users found.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Users;
