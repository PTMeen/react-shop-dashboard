import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const RevenueStat = ({ label, value, change }) => {
  return (
    <article className="bg-neutral-100 dark:bg-neutral-900 p-4 relative rounded-lg shadow-md flex">
      <div>
        <p className="text-neutral-500 text-sm">{label}</p>
        <p className="text-3xl lg:text-5xl font-bold pt-2 font-oswald">
          {value}
        </p>
      </div>
      <span
        className={`absolute ${
          change > 0
            ? "text-green-700 dark:text-green-300"
            : "text-red-700 dark:text-red-300"
        } top-2 dark:bg-neutral-800 right-2 flex gap-1 items-center bg-neutral-200 px-2 py-1 rounded-lg`}
      >
        {change > 0 ? <BsChevronUp /> : <BsChevronDown />} {change}%
      </span>
    </article>
  );
};
export default RevenueStat;
