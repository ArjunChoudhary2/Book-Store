import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArchive,
  HiArrowSmRight,
  HiChartPie,
  HiCloudUpload,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

import userImg from "../assets/profile.jpg";
import { AuthContext } from "../context/AuthProvider";
import { useNavigation, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigation();
  const from = location.state?.form?.pathname || "/";

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        
        navigate(from, { replace: true });
        alert("Sign-out successful!!!");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="/" img={userImg} imgAlt="Flowbite logo">
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiArchive}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item icon={HiTable}>
              <button onClick={handleLogout}>Log Out</button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
