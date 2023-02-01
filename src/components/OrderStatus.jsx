const OrderStatus = ({ status }) => {
  let styles =
    "bg-lime-500/25 w-fit px-2 py-1 text-xs rounded-full text-lime-600 dark:bg-lime-300/75 dark:text-lime-900";

  if (status === "Processing") {
    styles =
      "bg-sky-500/25 w-fit px-2 py-1 text-xs rounded-full text-sky-600 dark:bg-sky-300/75 dark:text-sky-900";
  }

  if (status === "On Hold") {
    styles =
      "bg-rose-500/25 w-fit px-2 py-1 text-xs rounded-full text-rose-600 dark:bg-rose-300/75 dark:text-rose-900";
  }

  return <span className={styles}>{status}</span>;
};
export default OrderStatus;
