import { SiTinder } from "react-icons/si";

const Membership = () => {
  return (
    <div className="bg-red-300 h-screen">
      <div className="flex flex-col justify-center mx-auto py-20  items-center  ">
        <h1 className="text-5xl font-bold italic mb-4 text-white">
          Subscription Tiers
        </h1>
        <p className="text-xl font-semibold mb-4 text-white">
          Upgrade to Gold, or Platinum for an enhanced Tinder experience.
        </p>
      </div>
      <div className=" flex gap-14 justify-center items-center  mb-24 ">
        <div className="card border border-white bg-white w-96 h-80 shadow-xl pt-4 translate delay-150 easy-in-out duration-300 hover:translae-y-1 hover:scale-110 hover:ease-in-out">
          <div className="flex items-center justify-center pt-4">
            <SiTinder className="lg:size-11 size-10 text-yellow-600" />
            <h1 className="text-3xl font-bold text-yellow-600 ">
              tinder{" "}
              <span className=" bg-yellow-600 text-sm p-2 rounded-lg text-black">
                GOLD
              </span>
            </h1>
          </div>

          <div className="card-body  ">
            <ul className="list-disc mt-5 ml-10 text-xl font-bold pt-2">
              <li>See Who Likes You</li>
              <li>New Top Picks every day</li>
              <li>And everything you love from Tinder Plus®!</li>
            </ul>
            <button className="bg-yellow-600 border-0 flex text-white p-4 justify-center items-center mx-auto rounded-full">
              Join Now
            </button>
          </div>
        </div>
        <div className="card border border-white bg-white w-96 h-80 shadow-xl pt-4 translate delay-150 easy-in-out duration-300 hover:translae-y-1 hover:scale-110 hover:ease-in-out">
          <div className="flex items-center justify-center pt-4">
            <SiTinder className="lg:size-11 size-10 text-slate-500" />
            <h1 className="text-3xl font-bold text-slate-500 ">
              tinder{" "}
              <span className=" bg-slate-500 text-sm p-2 rounded-lg text-black">
                PLATINUM
              </span>
            </h1>
          </div>

          <div className="card-body  ">
            <ul className="list-disc mt-5 ml-10 text-xl font-bold pt-2">
              <li>See Who Likes You</li>
              <li>New Top Picks every day</li>
              <li>And everything you love from Tinder Plus®!</li>
            </ul>
            <button className="bg-slate-5   00 border-0 flex text-white p-4 justify-center items-center mx-auto rounded-full">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
