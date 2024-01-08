import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const handleClick = () => {
    console.log(user)
    console.log("hello")
  }

  return <div className="min-h-screen bg-gray-100 py-6 flex items-center "><button onClick={handleClick}>Click </button></div>;
};

export default Profile;
