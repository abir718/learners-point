import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-around bg-base-100 shadow-md px-6 py-4">
      <div className="">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-24" />
        </Link>
      </div>

      <div className="">
        <ul className="flex items-center gap-6 text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="flex items-center gap-2 bg-blue-950 p-2 rounded-lg">
            <div className="w-8 rounded-full">
              <FaUserCircle className="w-full h-full text-2xl text-gray-600" />
            </div>
            <p className="text-lg text-white">Abir</p>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={() => alert("Logging out...")}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
