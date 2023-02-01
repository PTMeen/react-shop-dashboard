import { BsThreeDotsVertical } from "react-icons/bs";
import Topbar from "../components/TopBar";
import mockCustomers from "../data/mockCustomers.json";

const Customers = () => {
  return (
    <div>
      <Topbar title="Customers" />
      <article className="bg-neutral-100 p-4 mt-8 rounded-lg dark:bg-neutral-900">
        <div className="grid text-sm grid-cols-2 mb-4 lg:grid-cols-4 gap-2 lg:gap-4 border-b border-b-gray-700 pb-2 dark:border-b-gray-500">
          <span>Name</span>
          <span>Email</span>
          <span className="hidden lg:grid">Method</span>
          <span className="hidden lg:grid"></span>
        </div>
        <ul>
          {mockCustomers.map((customer) => {
            return (
              <li
                key={customer.id}
                className="mb-4 bg-neutral-200 dark:bg-neutral-800 p-2 rounded-lg"
              >
                <div className="grid text-sm grid-cols-2 items-center lg:grid-cols-4 gap-2 lg:gap-4 ">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[50px] bg-neutral-800 dark:bg-neutral-100 object-cover rounded-full"
                      src={customer.img}
                      alt={customer.first_name}
                    />
                    <p className="font-oswald font-bold">
                      {customer.first_name + " " + customer.last_name}
                    </p>
                  </div>
                  <span className="text-xs md:text-base truncate">
                    {customer.email}
                  </span>
                  <span className="hidden lg:grid">{customer.method}</span>

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
    </div>
  );
};
export default Customers;
