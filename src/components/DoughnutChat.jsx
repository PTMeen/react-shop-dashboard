import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import colors from "tailwindcss/colors";
import { mockRecentOrders } from "../data/data";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChat = () => {
  const findAmount = (status) => {
    return mockRecentOrders.filter((order) => order.status === status).length;
  };

  const data = {
    labels: ["Completed", "Processing", "On Hold"],
    datasets: [
      {
        label: "# of orders",
        data: [
          findAmount("Completed"),
          findAmount("Processing"),
          findAmount("On Hold"),
        ],
        backgroundColor: [
          colors.lime[600],
          colors.green[400],
          colors.emerald[100],
          ,
        ],
        borderColor: [colors.lime[500], colors.green[300], colors.emerald[100]],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 p-4 relative rounded-lg">
      <p className="text-neutral-500 text-sm mb-4">Order Status</p>
      <div className="h-[35vh] w-fit mx-auto">
        <Doughnut data={data} />
      </div>
    </div>
  );
};
export default DoughnutChat;
