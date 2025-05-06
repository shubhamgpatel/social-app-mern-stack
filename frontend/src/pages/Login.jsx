import React, { useState} from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { login } from "../redux/actions/authActions";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(
      localStorage.getItem("theme") === "dark"  );
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
    return (
      <>
        <button onClick={() => setDarkMode(!darkMode)} className="absolute top-4 right-4 text-white text-2xl focus:outline-none"> {darkMode ? <FaSun /> : <FaMoon />}</button>
      <div className="w-screen h-screen bg-[#f0f2f5] dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="w-[60%] h-[70%] flex">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[50px] font-extrabold text-[#1775ee] mb-2 dark:text-blue-400">MERN SocialApp</h3>
            <span className="text-[24px] text-gray-800 dark:text-gray-200">Connect with friends and the world around you on Social App.</span>
          </div>
  
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[300px] p-5 bg-white dark:bg-gray-800 rounded-[10px] flex flex-col justify-between shadow-md">
              <input required type="email" placeholder="Email" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white"  value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input required type="password" placeholder="Password" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleSubmit} className="h-[50px] rounded-[10px] bg-[#1775ee] hover:bg-blue-700 text-white text-[20px] font-medium cursor-pointer"  disabled={loading}>  {loading ? 'Logging in...' : 'Login'} </button>
              {/* {`w-full py-2 mt-4 bg-blue-500 text-white rounded-md ${loading ? 'opacity-50' : ''}`} */}
              <span className="text-center text-[#1775ee] dark:text-blue-400 cursor-pointer"> Forgot Password?</span>
              <button onClick={()=> navigate("/register")} className="w-[60%] self-center h-[50px] rounded-[10px] bg-[#42b72a] hover:bg-green-600 text-white text-[20px] font-medium cursor-pointer"> Create a New Account</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  