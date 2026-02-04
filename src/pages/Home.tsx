import { BlogList } from "@/components/organisms";
import { BlogsJson } from "@/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Latest Posts</h1>
        <button
          onClick={() => navigate("/portfolio")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Portfolio
        </button>
      </div>
      <BlogList blogs={BlogsJson.blogs} />
    </div>
  );
};

export default Home;
