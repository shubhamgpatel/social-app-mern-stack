export default function Register() {
    return (
      <div className="w-screen h-screen bg-[#f0f2f5] dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="w-[70%] h-[70%] flex">

          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[50px] font-extrabold text-[#1775ee] dark:text-blue-400 mb-2">ReactJS SocialApp </h3>
            <span className="text-[24px] text-gray-800 dark:text-gray-200">Connect with friends and the world around you on Social App.</span>
          </div>
  
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[400px] p-5 bg-white dark:bg-gray-800 rounded-[10px] shadow-md flex flex-col justify-between">
              <input placeholder="Username" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" />
              <input placeholder="Email" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" />
              <input placeholder="Password" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" />
              <input placeholder="Password Again" className="h-[50px] rounded-[10px] border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 text-[18px] pl-5 focus:outline-none text-black dark:text-white" />
              <button className="h-[50px] rounded-[10px] bg-[#1775ee] hover:bg-blue-700 text-white text-[20px] font-medium cursor-pointer">Sign Up</button>
              <button className="w-[60%] self-center h-[50px] rounded-[10px] bg-[#42b72a] hover:bg-green-600 text-white text-[20px] font-medium cursor-pointer">Log into Account </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  