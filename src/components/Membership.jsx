import axios from "axios";
import { SiTinder } from "react-icons/si";
import { ApiUrl, RazorpayKeyId } from "../utils/Constants";
import { useEffect, useState } from "react";

const Membership = () => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    verifySubscripitonUser();
  }, []);
  const verifySubscripitonUser = async () => {
    try {
      const res = await axios.get(ApiUrl + "/subscription/verify", {
        withCredentials: true,
      });
      if (res.data.subscriptionStatus) {
        setStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlesubmit = async (type) => {
    const subscription = await axios.post(
      ApiUrl + "/payment/create",
      { membershipType: type },
      { withCredentials: true }
    );
    const { amount, currency, notes, orderId } = subscription.data;
    console.log(subscription);
    const { firstName, lastName, email, mobile } = notes;
    const options = {
      key: RazorpayKeyId,
      amount,
      currency,
      name: "Devtinder",
      description: "make friends",
      order_id: orderId,
      prefill: {
        name: `${firstName} " " ${lastName}`,
        email: email,
        contact: mobile,
      },
      theme: {
        color: "#ff3399",
      },
      handler: verifySubscripitonUser,
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return status ? (
    <h1 className="text-5xl font-bold italic mb-4 text-white">
      You are already a Premium Member
    </h1>
  ) : (
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
            <button
              onClick={() => handlesubmit("GOLD")}
              className="bg-yellow-600 border-0 flex text-white p-4 justify-center items-center mx-auto rounded-full"
            >
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
            <button
              onClick={() => handlesubmit("PLATINUM")}
              className="bg-slate-500 border-0 flex text-white p-4 justify-center items-center mx-auto rounded-full"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
