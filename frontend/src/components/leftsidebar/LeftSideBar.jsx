import React from 'react'
import FeedIcon from '@mui/icons-material/Feed';
// import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

const sidebarItems = [
    { label: 'Feed', icon: FeedIcon },
    { label: 'Chat', icon: SendIcon },
    { label: 'Videos', icon: OndemandVideoIcon },
    { label: 'Groups', icon: GroupIcon },
    { label: 'Bookmarks', icon: BookmarkIcon },
    { label: 'Saved', icon: BookmarkAddIcon },
    { label: 'Questions', icon: HelpOutlineIcon },
    { label: 'Jobs', icon: WorkIcon },
    { label: 'Events', icon: EventIcon },
    { label: 'Courses', icon: SchoolIcon },
  ];
export default function LeftSideBar() {

  return (
    // <div className='flex-[3] h-[calc(100vh-64px)] bg-lightSidebar dark:bg-darkSidebar'>
    <div className="flex-[3] h-[calc(100vh-64px)] overflow-y-scroll sticky top-[50px] bg-lightSidebar dark:bg-darkSidebar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
      <div className='p-[20px]'>
        <ul className="p-0 m-0 list-none">
        {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className="flex items-center mb-[20px]">
                <IconComponent className="mr-[15px] fill-current text-gray-800 dark:text-white" />
                <span className="text-gray-800 dark:text-white">{item.label}</span>
              </li>
            );
          })}
        </ul>
        <button className="w-[150px] border-none px-[10px] py-[10px] rounded-[5px] font-medium bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">Show More</button>
        <hr className="my-[20px] border-t border-gray-300 dark:border-gray-600" />
        {/* <ul className="p-0 m-0 list-none">
            {Users.map((u) => (
                <CloseFriend key={u.id} user={u} />
            ))}
        </ul> */}
         <ul className="p-0 m-0 list-none">
        {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className="flex items-center mb-[20px]">
                <IconComponent className="mr-[15px] fill-current text-gray-800 dark:text-white" />
                <span className="text-gray-800 dark:text-white">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}
