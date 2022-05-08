import "./feed.css";
import CreatePost from "./../CreatePost/CreatePost";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className="Feed">
      <CreatePost />
      <h2>Latest Posts</h2>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
