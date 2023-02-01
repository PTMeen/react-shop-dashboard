import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = () => {
  return (
    <main className="w-screen h-screen flex text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="p-4 scrollbar-none  bg-neutral-200 overflow-y-scroll dark:bg-neutral-800 h-screen w-full">
        <Outlet />
      </div>
    </main>
  );
};
export default DashboardLayout;
