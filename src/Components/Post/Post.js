import "./post.css";
import { BsHeart } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { BsBookmark } from "react-icons/bs";

const Post = () => {
  return (
    <div className="Post">
      <div className="post-section">
        <div className="author-display-picture"></div>
        <div className="post-body">
          <p className="author-credentials">
            <span>Tanay Pratap </span>@tanaypratap
          </p>
          <p className="post-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="post-footer">
            <BsHeart fontSize="larger" />
            <VscComment fontSize="larger" />
            <BsBookmark fontSize="larger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
