import "./navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="navbar-items">
        <li>
          <HomeOutlinedIcon /> Home
        </li>
        <li>
          <ExploreOutlinedIcon />
          Explore
        </li>
        <li>
          <BookmarkBorderOutlinedIcon /> Bookmarks
        </li>
        <li>
          <NotificationsNoneOutlinedIcon /> Notifications
        </li>
        <li>
          <AccountCircleOutlinedIcon /> Profile
        </li>
      </ul>
      <button>Create New Post</button>
    </div>
  );
};

export default Navbar;
