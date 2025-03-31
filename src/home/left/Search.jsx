import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useUserGetAllUsers from "../../context/UserGetAllUsers.jsx";
import useConversation from "../../stateManage/useConversation.js";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = useUserGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // isme exact mathc krega
    const foundUser = allUsers.find((user) => user.name.toLowerCase() === search.toLowerCase());
    // isme leeter ko include krke sreturn krega
    // const foundUser = allUsers.find((user) => {return user.name.toLowerCase().includes(search.toLowerCase())});
    
    if (foundUser) {
      setSelectedConversation(foundUser);
      setSearch("");
    } else {
      toast.error("User not found")
      setSearch("");
    }
  };

  return (
    <div className="px-6 py-4">
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <label className="border-[1px] border-gray-700 bg-transparent rounded-lg flex items-center gap-2 w-[80%] p-3">
          <input
            type="text"
            className="grow outline-none"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">
          <IoSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
        </button>
      </form>
    </div>
  );
};

export default Search;
