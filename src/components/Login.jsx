import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiUrl } from "../utils/Constants";
import axios from "axios";
import { useDispatch } from "react-redux";

import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("siddhesh2@gmail.com");
  const [password, setPassword] = useState("Siddhesh@123");
  const [err, setErr] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        ApiUrl + "/login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.LoginUser));
      // console.log(res.data);
      navigate("/feed");
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1668871333606-ef8461d43922?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <section className=" bg-transparent w-96 border-2 border-white rounded-2xl backdrop-blur-xl p-8">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h1>
        <div className="relative mb-8  border-b-2 border-white">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full h-16 bg-transparent border-none outline-none text-white text-sm pl-2 pr-4 py-3 placeholder:text-white"
          />
        </div>
        <div className="relative mb-8  border-b-2 border-white">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full h-16 bg-transparent placeholder:text-white border-none outline-none text-white text-sm pl-2 pr-4 py-3"
          />
        </div>
        <div className=" text-white text-center font-bold  my-6">
          <p className="text-l">{err}</p>
        </div>

        <button
          className="w-full h-10 bg-white text-black rounded-full font-semibold hover:bg-white/70 transition-all"
          onClick={handleSubmit}
        >
          Login
        </button>

        <div className="text-center text-white mt-6">
          <p className="text-sm">
            Don&apos;t have an account?
            <Link to="/signup" className="font-semibold hover:underline">
              {" "}
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
