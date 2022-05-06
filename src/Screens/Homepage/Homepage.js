import "./homepage.css";
import Feed from "./../../Components/Feed/Feed";
import Recommendation from "./../../Components/Recommendation/Recommendation";
import Navbar from "./../../Components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Feed />
      <Recommendation />
      <Navbar />
    </div>
  );
};

export default Homepage;
