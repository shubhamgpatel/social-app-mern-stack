import Feed from "../components/feed/Feed";
import LeftSideBar from "../components/leftsidebar/LeftSideBar";
import RightSideBar from "../components/rightsidebar/RightSideBar";
import NavBar from "../components/topbar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="homeContainer flex w-full">
        <LeftSideBar/>
        <Feed/>
        <RightSideBar/>
      </div>
    </>
  )
}
