import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      await axios.post("http://localhost:3000/create-post", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      e.target.reset();
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-900 text-white font-mono">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96 bg-zinc-800 p-8 rounded-xl shadow-md"
      >
        <label className="flex flex-col gap-1">
          <span className="text-sm text-zinc-300">Image</span>
          <input
            type="file"
            accept="image/*"
            name="image"
            className="block w-full text-sm text-zinc-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-zinc-700 file:text-zinc-200
            hover:file:bg-zinc-600"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-zinc-300">Caption</span>
          <input
            type="text"
            name="caption"
            placeholder="Write a caption..."
            className="p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </label>
        <button
          type="submit"
          className="mt-2 py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition cursor-pointer"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
