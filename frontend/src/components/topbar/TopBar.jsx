import './topbar.css';
import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function TopBar() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Shubham Social</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className='searchicon'/>
                <input type="text" placeholder="Search for friend" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">Timeline</span>
                <span className="topbarLink"> <IconButton onClick={colorMode.toggleColorMode} color="inherit">{theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton></span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem"><PersonIcon/>
                    <span className="topbarIconBadge">12</span>
                </div>
                <div className="topbarIconItem"><ChatBubbleIcon/>
                    <span className="topbarIconBadge">12</span>
                </div>
                <div className="topbarIconItem"><NotificationsIcon/>
                    <span className="topbarIconBadge">12</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  )
}
