import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex items-center justify-between lg:justify-around bg-base-100 shadow-md px-6 py-4 relative">
      <div className="flex items-center space-x-2">
        <div className="md:hidden flex items-center">
          <button onClick={() => setSidebarOpen(true)} className="text-2xl text-purple-800"><FaBars /></button>
        </div>
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-24" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6 text-lg font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-700 font-medium" : "text-gray-500 font-medium hover:text-purple-700"}>Home</NavLink>
        <NavLink to="/courses" className={({ isActive }) => isActive ? "text-purple-700 font-medium" : "text-gray-500 font-medium hover:text-purple-700"}>Courses</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-700 font-medium" : "text-gray-500 font-medium hover:text-purple-700"}>About Us</NavLink>
      </div>



      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="flex items-center gap-2 bg-purple-800 p-2 rounded-lg cursor-pointer">
          <div className="w-8 rounded-full">
            <FaUserCircle className="w-full h-full text-2xl text-white" />
          </div>
          <p className="text-lg text-white">Abir</p>
          <MdKeyboardArrowDown className=" text-2xl text-white" />
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu dropdown-content bg-base-100 rounded-box w-40">
          <li><Link to="/dashboard"><FaUser /> Profile</Link></li>
          <li className="flex text-red-500"><button><MdOutlineLogout /> Logout</button></li>
        </ul>
      </div>


        <div className={`fixed md:hidden top-0 left-0 bg-white p-4 h-screen transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 duration-300 ease-in-out z-40`}>
          <div className=" w-64 h-full p-6 relative">
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-2xl text-gray-700">
              <FaTimes />
            </button>
            <nav className="flex flex-col gap-4 text-lg font-medium mt-8">
              <NavLink to="/" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-purple-700" : "text-gray-700 hover:text-purple-700"}>Home</NavLink>
              <NavLink to="/courses" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-purple-700" : "text-gray-700 hover:text-purple-700"}>Courses</NavLink>
              <NavLink to="/about-us" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-purple-700" : "text-gray-700 hover:text-purple-700"}>About Us</NavLink>
              <NavLink to="/contact" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-purple-700" : "text-gray-700 hover:text-purple-700"}>Contact</NavLink>
            </nav>
          </div>
        </div>

    </div>
  );
};

export default Header;
