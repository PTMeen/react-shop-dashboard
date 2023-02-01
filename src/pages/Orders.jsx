import DoughnutChat from "../components/DoughnutChat";
import OrderList from "../components/OrderList";
import OrderTotal from "../components/OrderTotal";
import TopBar from "../components/TopBar";
import { mockRecentOrders } from "../data/data";

const Orders = () => {
  return (
    <div>
      <TopBar title="Orders" />
      <div className="mt-8 flex gap-8 flex-col lg:flex-row">
        <section className="flex flex-col h-fit gap-4">
          <OrderTotal amount={mockRecentOrders.length} />
          <DoughnutChat />
        </section>
        <section className="flex-1">
          <OrderList items={mockRecentOrders} />
        </section>
      </div>
    </div>
  );
};
export default Orders;
