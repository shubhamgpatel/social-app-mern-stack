import Feed from "../components/feed/Feed";
import LeftSideBar from "../components/leftsidebar/LeftSideBar";
// import RightSideBar from "../components/rightsidebar/RightSideBar";
import NavBar from "../components/topbar/NavBar";

export default function Profile() {
  return (
    <>
      <NavBar />
      <div className="flex bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <LeftSideBar />
        <div className="flex-[9]">
          {/* Top section with cover and user image */}
          <div>
            <div className="relative h-[320px]">
              <img className="w-full h-[250px] object-cover" src="assets/post/3.jpeg" alt="" />
              <img className="w-[150px] h-[150px] object-cover rounded-full absolute left-0 right-0 mx-auto top-[150px] border-[3px] border-white dark:border-gray-900" src="assets/person/7.jpeg" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <h4 className="text-[24px] font-semibold">Shubham Patel</h4>
              <span className="font-light">Hello my friends!</span>
            </div>
          </div>

          {/* Bottom section with Feed and Rightbar */}
          <div className="flex">
            <Feed/>
            {/* <RightSideBar profile/> */}
          </div>
        </div>
      </div>
    </>
  );
}
