import BarChart from "../components/BarChart";
import RecentOrders from "../components/RecentOrders";
import RevenueStat from "../components/RevenueStat";
import Topbar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      <Topbar title="overview" />
      <section className="grid lg:grid-cols-3 py-8 gap-4 ">
        <RevenueStat label="Daily Revenue" value="$7,864" change={-7} />
        <RevenueStat label="YTD Revenue" value="$1,437,876" change={17} />
        <RevenueStat label="Customers" value="11,437" change={11} />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <BarChart />
        <RecentOrders />
      </section>
    </div>
  );
};
export default Home;
