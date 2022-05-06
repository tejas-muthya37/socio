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
          <HomeOutlinedIcon fontSize="large" /> Home
        </li>
        <li>
          <ExploreOutlinedIcon fontSize="large" /> Explore
        </li>
        <li>
          <BookmarkBorderOutlinedIcon fontSize="large" /> Bookmarks
        </li>
        <li>
          <NotificationsNoneOutlinedIcon fontSize="large" /> Notifications
        </li>
        <li>
          <AccountCircleOutlinedIcon fontSize="large" /> Profile
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
