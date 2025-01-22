import axios from "axios";
import { useDispatch } from "react-redux";
import { ApiUrl } from "../utils/Constants";
import { filterfeed } from "../utils/FeedSlice";

const FeedCard = ({ data }) => {
  const dispatch = useDispatch();
  if (!data) return <div>Loading...</div>;

  const { _id, firstName, lastName, photoUrl, age, gender, about } = data;

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        ApiUrl + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(filterfeed(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex absolute justify-center items-center min-h-screen">
      <div className=" bg-transparent rounded-xl backdrop-blur-sm p-8  ">
        <img src={photoUrl} alt="profile" className="w-96 h-96 " />

        <h2 className="text-3xl font-bold text-white mb-2">
          {firstName + " " + lastName}
        </h2>
        {age && gender && (
          <p
            className="text-lg text-white font-bold
               mb-4"
          >
            {age + ", " + gender}
          </p>
        )}
        <p className="text-white text-lg font-semibold mb-4">{about}</p>
        <div className="flex justify-center gap-4">
          <button
            className="flex-1  py-3 px-6 bg-white text-red-500 font-semibold rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100"
            onClick={() => handleSendRequest("Ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="flex-1 py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-600"
            onClick={() => handleSendRequest("Intersted", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
