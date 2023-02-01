import { Link } from "react-router-dom";
import { GiFrogFoot } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { BsSun, BsMoon } from "react-icons/bs";
import { useThemeContext } from "../contexts/ThemeContext";

const Sidebar = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <aside className="w-20  bg-neutral-100 dark:bg-neutral-900 p-2 items-center">
      <nav className="flex flex-col justify-between text-center h-full">
        <div className="flex flex-col">
          <Link to="/">
            <div className="bg-lime-500 dark:bg-lime-300 dark:text-neutral-900 text-white p-3 rounded-2xl inline-block">
              <GiFrogFoot size={25} />
            </div>
          </Link>
          <span className="border-b-[1px] my-2 border-b-gray-600 dark:border-b-gray-400"></span>
          <div className="flex flex-col gap-4">
            <Link to="/" title="Overview">
              <div className=" dark:text-neutral-200 bg-neutral-200  dark:bg-neutral-800 hover:rounded-full duration-300 rounded-lg text-neutral-900 p-3  inline-block">
                <MdDashboard size={20} />
              </div>
            </Link>
            <Link to="/orders" title="Orders">
              <div className=" dark:text-neutral-200 bg-neutral-200  dark:bg-neutral-800 hover:rounded-full duration-300 rounded-lg text-neutral-900 p-3  inline-block">
                <AiOutlineUnorderedList size={20} />
              </div>
            </Link>
            <Link to="/customers" title="Customers">
              <div className=" dark:text-neutral-200 bg-neutral-200  dark:bg-neutral-800 hover:rounded-full duration-300 rounded-lg text-neutral-900 p-3  inline-block">
                <RxPerson size={20} />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <button
            onClick={toggleTheme}
            title={theme === "dark" ? "Use light mode" : "Use dark mode"}
          >
            <div className=" dark:text-neutral-200 bg-neutral-200  dark:bg-neutral-800 hover:rounded-full duration-300 rounded-lg text-neutral-900 p-3  inline-block">
              {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
            </div>
          </button>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
