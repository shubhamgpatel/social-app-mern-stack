import React from 'react';
// import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";


export default function CreatePost() {
  return (
    <div className="w-full h-[170px] rounded-[10px] shadow-[0px_0px_16px_-8px_rgba(0,0,0,0.68)] bg-white dark:bg-darkSidebar">
      <div className="p-2.5">
        {/* Top */}
        <div className="flex items-center">
          <img src="/assets/person/1.jpeg" alt="" className="w-[50px] h-[50px] rounded-full object-cover mr-2.5" />
          <input placeholder="What's on your mind, Safak?" className="border-none w-[80%] focus:outline-none bg-transparent text-black dark:text-white" />
        </div>

        <hr className="my-5 border-gray-300 dark:border-gray-600" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div className="flex ml-5">
            <div className="flex items-center mr-4 cursor-pointer">
                <PermMediaIcon htmlColor="tomato" className="text-[18px] mr-1" />
              <span className="text-[14px] font-medium text-gray-800 dark:text-white">Photo or Video</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <LabelIcon  htmlColor="blue" className="text-[18px] mr-1" />
              <span className="text-[14px] font-medium text-gray-800 dark:text-white">Tag</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <RoomIcon htmlColor="green" className="text-[18px] mr-1" />
              <span className="text-[14px] font-medium text-gray-800 dark:text-white">Location</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="text-[18px] mr-1" />
              <span className="text-[14px] font-medium text-gray-800 dark:text-white">Feelings</span>
            </div>
          </div>
          <button className="border-none py-1.5 px-4 rounded bg-green-600 text-white font-medium mr-5 cursor-pointer">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
