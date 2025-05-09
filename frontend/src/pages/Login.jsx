import React, { useState} from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { login } from "../redux/actions/authActions";
import { FaSun, FaMoon } from 'react-icons/fa';
import { replace, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading, error, user} = useSelector(state => state.auth);
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };
  // Redirect to home if login is successful
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark"  );
  
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
      <>
        <button onClick={() => setDarkMode(!darkMode)} className="absolute top-4 right-4 text-white text-2xl focus:outline-none"> {darkMode ? <FaSun /> : <FaMoon />}</button>
      <div className="w-screen h-screen bg-[#f0f2f5] dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="w-[60%] h-[70%] flex">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[50px] font-extrabold text-[#1775ee] mb-2 dark:text-blue-400">MERN SocialApp</h3>
            <span className="text-[24px] text-gray-800 dark:text-gray-200">Connect with friends and the world around you on Social App.</span>
          </div>
  
          <div className="flex-1 flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <div className="h-[300px] p-5 bg-white dark:bg-gray-800 rounded-[10px] flex flex-col justify-between shadow-md">
              <input required type="email" placeholder="Email" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white"  name="email" value={credentials.email} onChange={handleChange}/>
              <input required type="password" placeholder="Password" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" name="password" value={credentials.password} onChange={handleChange} />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}> {loading ? 'Logging in...' : 'Login'} </button>
              {error && <p className="text-red-600 text-sm text-center">{error}</p>}
              {/* {`w-full py-2 mt-4 bg-blue-500 text-white rounded-md ${loading ? 'opacity-50' : ''}`} */}
              <span className="text-center text-[#1775ee] dark:text-blue-400 cursor-pointer"> Forgot Password?</span>
              <button onClick={()=> navigate("/register")} className="w-[60%] self-center h-[50px] rounded-[10px] bg-[#42b72a] hover:bg-green-600 text-white text-[20px] font-medium cursor-pointer"> Create a New Account</button>
            </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
  