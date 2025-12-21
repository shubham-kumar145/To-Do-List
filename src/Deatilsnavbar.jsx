import React from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Corrected import

const Deatilsnavbar = () => {
  return (
    <div className="fixed w-full h-[11vh] bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-100 
backdrop-blur-md z-50 flex justify-between items-center px-10 shadow-md border-b border-white/30">

      {/* Left Side - Logo or Brand */}
      <NavLink to="/home" className="text-lg font-semibold text-gray-700 hover:text-purple-600 transition-all">
        Home
      </NavLink>

      {/* Center - Title */}

      <NavLink to="/" className="text-3xl ">
        📝 <span className='font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 bg-clip-text drop-shadow-md tracking-wide'>ToDo List</span>
      </NavLink>

      {/* Right Side - Login */}
      <NavLink to="/login" className="text-lg font-semibold text-gray-700 hover:text-purple-600 transition-all">
        Login
      </NavLink>
    </div>

  );
};

export default Deatilsnavbar;
