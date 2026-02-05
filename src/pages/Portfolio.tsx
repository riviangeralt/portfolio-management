import { PerformanceChart, ReturnsTable } from "@/components/organisms";
import { NavDataJson } from "@/data";
import { calculateDrawdown } from "@/utils";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const data = NavDataJson.map((d, i) => ({
    ...d,
    drawdown: calculateDrawdown(NavDataJson)[i].drawdown,
  }));

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Portfolio Performance</h1>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>

      <PerformanceChart data={data} />
      <ReturnsTable data={NavDataJson} />
    </div>
  );
};

export default Portfolio;
