import { mockRecentOrders } from "../data/data";

const RecentOrders = () => {
  return (
    <article className="lg:h-[65vh] h-[50vh] m-auto p-4 text-neutral-800 dark:text-neutral-200 w-full bg-neutral-100 shadow-lg rounded-lg dark:bg-neutral-900">
      <p className="text-neutral-500 text-sm mb-4">Recent Orders</p>
      <ul className="w-full h-[90%] mx-auto my-2 p-1 overflow-y-scroll scrollbar-none">
        {mockRecentOrders.map((order) => {
          return (
            <li
              key={order.id}
              className="mb-2  bg-neutral-50 p-4 rounded-lg shadow-md dark:bg-neutral-800 flex items-end justify-between"
            >
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pb-1">
                  {order.name.first} {order.name.last}
                </p>
                <p className="text-xl font-semibold font-oswald">
                  ${order.total}
                </p>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {order.date}
              </p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
export default RecentOrders;
