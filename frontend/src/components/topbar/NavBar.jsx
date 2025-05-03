import { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaUser, FaComments, FaBell, FaSearch } from 'react-icons/fa';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="w-full h-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Left - Logo */}
      <div className="text-xl font-bold">Shubham Social <span className='text-xs tracking-[.05em]'>Tailwind</span></div>

      {/* Center - Search bar */}
      <div className="flex items-center w-1/2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1">
        <FaSearch className="text-gray-500 dark:text-gray-300 mr-2" />
        <input type="text" placeholder="Search for friends..." className="bg-transparent w-full outline-none text-sm placeholder-gray-500 dark:placeholder-gray-300" />
      </div>

      {/* Right - Icons & Toggle */}
      <div className="flex items-center space-x-4">
        {/* Links */}
        <span className="hidden md:inline cursor-pointer">Home</span>
        <span className="hidden md:inline cursor-pointer">Timeline</span>

        {/* Theme Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Icons */}
        <div className="relative cursor-pointer">
          <FaUser />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
        <div className="relative cursor-pointer">
          <FaComments />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
        </div>
        <div className="relative cursor-pointer">
          <FaBell />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
        </div>

        {/* Profile Picture */}
        <img src="/assets/person/1.jpeg" alt="Profile" className="w-8 h-8 object-cover rounded-full cursor-pointer" />
      </div>
    </nav>
  );
}
