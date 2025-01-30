import axios from "axios";
import { useEffect, useState } from "react";
import { ApiUrl } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addFriends } from "../utils/showFriendsSlice";
import { Link } from "react-router-dom";

const Friends = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const friendsdata = useSelector((state) => state.showFriends.friends);
  const dispatch = useDispatch();

  // Filter friends based on search term
  const filteredFriends = friendsdata.filter((friend) =>
    friend.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch friends data
  const showfriends = async () => {
    try {
      const res = await axios.get(ApiUrl + "/user/friends", {
        withCredentials: true,
      });
      dispatch(addFriends(res.data.data)); // Dispatching the friends data to Redux
    } catch (err) {
      setError("Failed to load friends data."); // Setting the error message
      console.log(err); // Logging the error to the console
    } finally {
      setLoading(false); // Turn off loading once data is fetched or error occurs
    }
  };

  useEffect(() => {
    showfriends();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div
      className="top-0 left-0 p-6 w-full flex justify-between z-50 min-h-screen"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "url('https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/10/tinder-1-ap-hero.jpg')",
      }}
    >
      <div className="items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-8 rounded-3xl shadow-lg w-full lg:w-1/2 mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl pt-6 lg:pt-0 font-semibold text-gray-800">
            Friends List
          </h1>
        </header>

        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search friends..."
            className="p-3 w-full max-w-md border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="space-y-4">
          {filteredFriends.length > 0 ? (
            filteredFriends.map((friend) => (
              <li
                key={friend._id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={friend.photoUrl}
                    alt={friend.firstName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      {friend.firstName + " " + friend.lastName}
                    </p>
                    {/* Fixed the age and gender checks */}
                    {friend.age && friend.gender && (
                      <p className="text-sm font-medium text-gray-700">
                        Age: {friend.age} Gender: {friend.gender}
                      </p>
                    )}
                  </div>
                </div>
                <Link to={"/chat/" + friend._id}>
                  <button className="text-blue-500 hover:text-blue-700 text-lg font-bold cursor-pointer   ">
                    Chat
                  </button>
                </Link>
              </li>
            ))
          ) : (
            <li className="text-center text-white">No friends found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
