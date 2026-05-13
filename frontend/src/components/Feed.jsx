import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);
  console.log(posts);
  return (
    <>
    <div className="fixed top-5 right-5 text-white">
        <Link to={'/create-post'}>Create Post</Link>
    </div>
    <div className="w-full min-h-screen bg-zinc-900 text-white font-mono flex flex-col gap-20 items-center py-20">
      {posts.map((post) => (
          <div className="div w-[30vw] h-[50vh] rounded-xl border flex flex-col items-center justify-between overflow-hidden">
          <img className="w-full h-[80%] object-cover" src={post.image} alt="" />
          <div className="h1 mb-10">{post.caption}</div>
        </div>
      ))}
    </div>
      </>
  );
};

export default Feed;
