import "./homepage.css";
import Feed from "./../../Components/Feed/Feed";
import Recommendation from "./../../Components/Recommendation/Recommendation";
import Navbar from "./../../Components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <Feed />
      {/* <Recommendation /> */}
    </div>
  );
};

export default Homepage;
