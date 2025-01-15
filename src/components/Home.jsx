import { Link } from "react-router-dom";
import { TinderBg } from "../utils/Constants";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-gradient-to-t from-black">
        <div>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            src={TinderBg}
            alt="bgimg"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full top-0 left-0 ">
          <h1 className="text-8xl font-bold text-white ">
            Start something epic.
          </h1>
          <Link to="/signup">
            <button className="text-white bg-gradient-to-b from-orange-500 to-pink-500 font-bold text-2xl px-6 py-3 mt-8 rounded-full">
              Create account
            </button>
          </Link>
        </div>
      </div>
      <div>
        <p>more stuff</p>
      </div>
    </>
  );
};

export default Home;
