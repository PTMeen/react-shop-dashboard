const TopBar = ({ title }) => {
  return (
    <div className="flex justify-between items-end text-gray-600 dark:text-gray-400">
      <h2 className="text-2xl  lg:text-4xl font-bold capitalize">{title}</h2>
      <p className="text-xs lg:text-lg">Good Morning, Pakapol</p>
    </div>
  );
};

export default TopBar;
