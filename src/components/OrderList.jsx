import { TbFileInvoice } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import OrderStatus from "./OrderStatus";

const OrderList = ({ items }) => {
  return (
    <article className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg shadow-lg lg:h-[85vh] scrollbar-none overflow-y-scroll">
      {/* <p className="text-neutral-500 text-sm">Order List</p> */}
      <article className=" rounded-lg p-2">
        <div className="grid mb-4 grid-cols-3 lg:grid-cols-5 text-neutral-500 text-sm border-b border-b-gray-700 pb-2 dark:border-b-gray-500">
          <span>Order</span>
          <span className="text-right sm:text-left">Status</span>
          <span className="hidden lg:grid ">Last Order</span>
          <span className="hidden lg:grid ">Method</span>
        </div>
        <ul className="h-full pb-4">
          {items.map((item) => {
            return (
              <li
                key={item.id}
                className="bg-neutral-200 rounded-lg dark:bg-neutral-800"
              >
                <div
                  className="grid
                  items-center
                  justify-between
                  grid-cols-2
                  p-2
                  my-3
                  cursor-pointer
                  lg:grid-cols-5 text-sm
                  "
                >
                  <span className="flex gap-2">
                    <div>
                      <p className="opacity-50">{item.name.first}</p>
                      <p className="font-bold text-lg font-oswald">
                        ${item.total}
                      </p>
                    </div>
                  </span>
                  <OrderStatus status={item.status} />
                  <span className="hidden lg:grid opacity-50">{item.date}</span>
                  <span className="hidden lg:grid opacity-50">
                    {item.method}
                  </span>
                  <span className="hidden opacity-50 lg:grid justify-self-end">
                    <button>
                      <BsThreeDotsVertical size={20} />
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </article>
  );
};
export default OrderList;
