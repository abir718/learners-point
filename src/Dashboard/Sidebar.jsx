import { useState} from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="md:hidden p-2 text-[#0A303A] fixed top-4 left-4 z-30 bg-gray-100 rounded-lg shadow" onClick={() => setIsOpen(true)}>
        <FiMenu size={24} />
      </button>

      <div
        className={`fixed md:relative top-0 left-0 w-64 bg-gray-50 p-4 h-full transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg md:shadow-none z-40`}
      >
        <button className="md:hidden absolute top-4 right-4 p-2 bg-gray-200 rounded-lg" onClick={() => setIsOpen(false)}>
          <AiOutlineClose size={24} />
        </button>

        <h1 className="text-xl text-[#0A303A] font-bold mb-4 mt-10 md:mt-0">Sidebar</h1>
        <div className="lg:space-y-4 md:space-y-2">
          <NavLink to="/dashboard" end className={({ isActive }) => `block p-2 text-[#0A303A] font-medium rounded-lg hover:bg-gray-200 ${isActive ? "bg-gray-200" : ""}`}>Dashboard</NavLink>
          <NavLink to="addcourse" className={({ isActive }) => `block p-2 text-[#0A303A] font-medium rounded-lg hover:bg-gray-200 ${isActive ? "bg-gray-200" : ""}`}>Add Courses</NavLink>
          <NavLink to="all-courses" className={({ isActive }) => `block p-2 text-[#0A303A] font-medium rounded-lg hover:bg-gray-200 ${isActive ? "bg-gray-200" : ""}`}>All Courses</NavLink> 
          <NavLink to="all-users" className={({ isActive }) => `block p-2 text-[#0A303A] font-medium rounded-lg hover:bg-gray-200 ${isActive ? "bg-gray-200" : ""}`}>All Users</NavLink>

          <hr />
          <NavLink className="p-2 text-[#0A303A] font-medium rounded-lg flex gap-2 items-center hover:bg-gray-200" to="/"><IoHome />Home</NavLink>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-200 md:hidden z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
