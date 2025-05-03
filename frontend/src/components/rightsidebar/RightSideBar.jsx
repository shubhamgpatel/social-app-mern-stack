// import { Users } from "../../dummyData";
// import Online from "../online/Online";

export default function RightSideBar({ profile }) {
  const HomeRightbar = () => (
    <>
      <div className="flex items-center">
        <img className="w-10 h-10 mr-2" src="assets/gift.png" alt="" />
        <span className="font-light text-[15px]">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
        </span>
      </div>
      <img className="w-full rounded-[10px] my-[30px]" src="assets/ad.png" alt="" />
      <h4 className="text-[18px] font-medium mb-[10px] text-gray-800 dark:text-white">Online Friends</h4>
      <ul className="list-none p-0 m-0">
        {/* {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))} */}
      </ul>
    </>
  );

  const ProfileRightbar = () => (
    <>
      <h4 className="text-[18px] font-medium mb-[10px] text-gray-800 dark:text-white">User Information</h4>
      <div className="mb-[30px]">
        <div className="mb-[10px]">
          <span className="font-medium mr-[15px] text-gray-600 dark:text-gray-300">City:</span>
          <span className="font-light text-gray-800 dark:text-white">New York</span>
        </div>
        <div className="mb-[10px]">
          <span className="font-medium mr-[15px] text-gray-600 dark:text-gray-300">From:</span>
          <span className="font-light text-gray-800 dark:text-white">Madrid</span>
        </div>
        <div className="mb-[10px]">
          <span className="font-medium mr-[15px] text-gray-600 dark:text-gray-300">Relationship:</span>
          <span className="font-light text-gray-800 dark:text-white">Single</span>
        </div>
      </div>
      <h4 className="text-[18px] font-medium mb-[10px] text-gray-800 dark:text-white">User Friends</h4>
      <div className="flex flex-wrap justify-between">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col mb-[20px] cursor-pointer">
            <img src={`assets/person/${i}.jpeg`} alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            <span className="text-center text-gray-800 dark:text-white mt-1">John Carter</span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="flex-[3.5]">
      <div className="p-[20px] pr-10">{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>
    </div>
  );
}
