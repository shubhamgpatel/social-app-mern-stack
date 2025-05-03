import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const user = Users.find((u) => u.id === post?.userId);

  return (
    <div className="w-full rounded-[10px] shadow-md shadow-black/50 my-[30px] bg-white dark:bg-darkSidebar">
      <div className="p-2">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full object-cover" src={user?.profilePicture} alt="" />
            <span className="text-[15px] font-medium mx-[10px] text-gray-800 dark:text-white"> {user?.username} </span>
            <span className="text-[12px] text-gray-600 dark:text-gray-300"> {post.date} </span>
          </div>
          <MoreVertIcon className="text-gray-600 dark:text-gray-300" />
        </div>

        {/* Center */}
        <div className="my-5">
          <span className="text-gray-800 dark:text-gray-100">{post?.desc}</span>
          <img className="mt-5 w-full max-h-[500px] object-contain" src={post.photo} alt="" />
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-6 h-6 mr-1 cursor-pointer" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="w-6 h-6 mr-1 cursor-pointer" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="text-[15px] text-gray-800 dark:text-white"> {like} people like it </span>
          </div>
          <div>
            <span className="text-[15px] cursor-pointer border-b border-dashed border-gray-400 text-gray-800 dark:text-gray-200">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
