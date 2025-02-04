import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { ApiUrl } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserLogin = async () => {
    try {
      const res = await axios.get(ApiUrl + "/profile", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      // if (err.response.status === 400) {
      //   navigate("/login");
      // }
      console.error(err);
    }
  };
  useEffect(() => {
    isUserLogin();
  }, []);
  return (
    <div className="bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
