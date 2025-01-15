import Home from "./Home";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Outlet />
    </div>
  );
};

export default Body;
