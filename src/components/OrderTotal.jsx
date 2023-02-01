const OrderTotal = ({ amount }) => {
  return (
    <div className="p-4 lg:w-full bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-lg">
      <p className="text-neutral-500 text-sm mb-4">Order Amount (today)</p>
      <p className="text-4xl lg:text-5xl font-bold pt-2 font-oswald">
        {amount} orders
      </p>
    </div>
  );
};
export default OrderTotal;
