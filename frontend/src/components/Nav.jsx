import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog } from 'react-icons/fa6';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell-Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header>
      <nav>
        <div>
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaBlog className="inline-block"/> Books
          </Link>
        </div>
        {/* nav items for large device */}
        <ul className="md:flex space-x-12 hidden ">
          {
            navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                  {link}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="space-x-12 hidden lg:flex item-center"><button><FaBarsStaggered className="w-5 hover:text-blue-700"/></button></div>
      </nav>
    </header>
  );
};

export default Nav;
