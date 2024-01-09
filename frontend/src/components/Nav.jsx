import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";
import { Button } from "flowbite-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Sign-out successful!!!");
        navigate("/");
      })
      .catch((error) => {});
  };

  //toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Add event listener here

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // navItems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" /> PageTurner
          </Link>
          {/* nav items for large device */}
          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {link}
                </Link>
              </li>
            ))}
            {user ? (
              <li key={"/admin/dashboard/upload"}>
                <Link
                  to={"/admin/dashboard/upload"}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  Sell-book
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="space-x-12 hidden lg:flex item-center">
            <div>
              {user ? (
                <Button onClick={handleLogout} color="gray" pill>
                  Log out
                </Button>
              ) : (
                <div className="flex">
                  <Link
                    to="/signup"
                    className="   text-base text-black uppercase cursor-pointer hover:text-blue-700"
                  >
                    <Button color="purple" pill>
                      Become a Sellar
                    </Button>
                  </Link>
                  <Link
                    to="/login"
                    className="   text-base text-black uppercase cursor-pointer hover:text-blue-700"
                  >
                    <Button color="white" className="px-3">
                      Sell Books
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* menu btn for mobile devices */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5 text-black" />
            ) : (
              <FaBarsStaggered className="h-5 w-5 text-black" />
            )}
          </button>

          {/* nav items for sm devices */}
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-white uppercase cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
