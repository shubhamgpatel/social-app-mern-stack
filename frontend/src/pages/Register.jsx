import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name:'', email: '', password: ''  });
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev,  [e.target.name]: e.target.value    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/register', formData);
      console.log('User registered:', res.data);
      setMessage("Registration Successful,redirecting to Login")
      setTimeout(() => {
        navigate('/');
      }, 2000); // 2 seconds delay before redirect
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

    return (
      <div className="w-screen h-screen bg-[#f0f2f5] dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="w-[70%] h-[70%] flex">
        <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[50px] font-extrabold text-[#1f2937] dark:text-blue-400 mb-2">Register on ReactJS SocialApp </h3>
            <span className="text-[24px] text-gray-800 dark:text-gray-200">Connect with friends and the world around you on Social App.</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <form onSubmit={handleSubmit}>
            <div className="h-[400px] p-5 bg-white dark:bg-gray-800 rounded-[10px] shadow-md flex flex-col justify-between">
              <input required value={formData.name} name='name' onChange={handleChange} placeholder="Name" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" />
              <input required type='email' value={formData.email} name='email' onChange={handleChange} placeholder="Email" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" />
              <input required value={formData.password} type="password" name='password' onChange={handleChange} placeholder="Password" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" />
              <input required placeholder="Confirm Password" type="password" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" />
              <button type="submit" className="h-[50px] rounded-[10px] bg-[#0f3a75] hover:bg-[#1f2937] text-white text-[20px] font-medium cursor-pointer">Sign Up</button>
              <button onClick={()=> navigate("/login")} className="w-[60%] self-center h-[50px] rounded-[10px] bg-[#42b72a] hover:bg-green-600 text-white text-[20px] font-medium cursor-pointer">Log into Account </button>
        {message && (<p className={`text-sm mb-3 ${message.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>{message}  </p>)}
              </div>
            </form>
          </div>
        
        </div>
      </div>
    );
  }
  