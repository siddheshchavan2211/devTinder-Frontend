import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ApiUrl } from "../utils/Constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { SiTinder } from "react-icons/si";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLogin = useSelector((state) => state.user.user);
  const isLoginPage = location.pathname === "/login";
  const photoUrl = isUserLogin ? isUserLogin.photoUrl : null;
  const handleHomeClick = (e) => {
    if (isUserLogin) {
      e.preventDefault();
      navigate("/feed");
    }
  };
  const { firstName, lastName, email } = isUserLogin ? isUserLogin : {};
  const handleLogout = async () => {
    try {
      await axios.post(ApiUrl + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed top-0 left-0   p-6  w-full flex justify-between z-50 ">
      <Link to="/" onClick={handleHomeClick}>
        {" "}
        <div className="items-center text-white  text-4xl font-bold flex gap-1">
          <SiTinder className="lg:size-11 size-10 text-red-400" /> Devtinder{" "}
        </div>
      </Link>
      {!isLoginPage && !isUserLogin && (
        <Link to="/login">
          <button className="bg-white border-0 text-black px-4 py-2 lg:px-8 rounded-full">
            Login
          </button>
        </Link>
      )}
      {isUserLogin && (
        <div className="relative group">
          <button className="flex items-center justify-center w-12 h-10 rounded-full  hover:bg-gray-500">
            <img
              src={photoUrl}
              alt="User avatar"
              className="w-12 h-12 rounded-full"
            />
          </button>

          {/* Dropdown menu that shows on hover using group */}
          <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
            <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
              <p className="font-medium">{firstName + " " + lastName}</p>
              <p className="text-gray-500">{email}</p>
            </div>
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              to="/friends"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Friends
            </Link>
            <Link
              to="/pendingrequests"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Requests
            </Link>
            <Link
              to="/subscription"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Subscription
            </Link>
            <p
              onClick={handleLogout}
              className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100"
            >
              Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
