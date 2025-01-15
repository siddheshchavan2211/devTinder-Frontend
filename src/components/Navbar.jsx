import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 bg-gradient-to-b from-black  p-6  w-full flex justify-between z-50 ">
      <h1 className="text-white text-4xl font-bold"> 🔥devtinder </h1>

      <Link to="/login">
        <button className="bg-white border-0 text-black py-2 px-8 rounded-full">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
