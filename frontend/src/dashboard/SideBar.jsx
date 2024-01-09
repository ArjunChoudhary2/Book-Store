import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { FaBlog } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
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
  const navigatekar = () => {
    navigate("/");
  };
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("done");

        alert("Sign-out successful!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 flex items-center gap-2 py-5 mx-4"
        >
          <FaBlog className="inline-block" /> PageTurner
        </Link>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiArchive}>
              Manage Books
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
