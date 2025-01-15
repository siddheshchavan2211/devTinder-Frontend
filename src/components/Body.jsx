import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { ApiUrl } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";
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
      console.log(err);
    }
  };
  useEffect(() => {
    isUserLogin();
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
