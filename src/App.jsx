import { Route, Routes } from "react-router-dom";
import { useThemeContext } from "./contexts/ThemeContext";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";

const App = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};
export default App;
