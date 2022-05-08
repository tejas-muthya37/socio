import "./createPost.css";
import { BsCameraFill } from "react-icons/bs";

const CreatePost = () => {
  return (
    <div className="CreatePost">
      <div className="create-post-section">
        <div className="author-display-picture"></div>
        <div className="create-post-body">
          <textarea placeholder="What do you want to share with the world?"></textarea>
          <div className="create-post-footer">
            <BsCameraFill fontSize="larger" />
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
