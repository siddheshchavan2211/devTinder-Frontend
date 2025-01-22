import axios from "axios";
import { useEffect, useState } from "react";
import { ApiUrl } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { showRequests, removeRequest } from "../utils/showFriendsSlice";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const PendingRequests = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const requestdata = useSelector((state) => state.showFriends.requests); // Assuming requests is an array
  const dispatch = useDispatch();
  // Fetch requests data from API
  //   if (!requestdata) return <h1>No Request Found</h1>;
  const showfriends = async () => {
    try {
      const res = await axios.get(ApiUrl + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(showRequests(res.data.data)); // Store requests in Redux
    } catch (err) {
      setError("Failed to load requests data."); // Setting the error message
      console.log(err); // Logging the error to the console
    } finally {
      setLoading(false); // Turn off loading once data is fetched or error occurs
    }
  };
  const handleRequest = async (status, _id) => {
    try {
      // Make the API call to accept/reject the request
      const res = await axios.post(
        ApiUrl + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );

      // Update the status in the Redux store
      dispatch(
        removeRequest(_id) // Send the _id and status to the reducer
      );

      toast.success("Request Updated Successfully!", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    showfriends();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center  min-h-screen">
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
      <ToastContainer />
      <div className="items-center pt-14  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 lg:p-8 p-1 rounded-3xl shadow-lg w-full lg:w-1/2 mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Pending Requests
          </h1>
        </header>

        <ul className="space-y-4">
          {requestdata && requestdata.length > 0 ? (
            requestdata.map((request, index) => {
              // Destructure properties from request.senderId
              const { firstName, lastName, age, gender, photoUrl } =
                request.senderId;

              // Make sure to return the JSX for the list item
              return (
                <li
                  key={index} // or key={request._id} if it's available
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={photoUrl}
                      alt={firstName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-bold lg:font-medium text-gray-700">
                        {firstName + " " + lastName}
                      </p>
                      {age && gender && (
                        <p className="text-sm font-medium text-gray-700">
                          Age: {age} Gender: {gender}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="lg:gap-4 gap-1 flex ">
                    <button
                      className="text-white p-2  bg-green-600 text-sm rounded-lg hover:bg-green-800"
                      onClick={() => handleRequest("Accepted", request._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="text-white bg-red-600  p-2 text-sm rounded-lg hover:text-red-800"
                      onClick={() => handleRequest("Rejected", request._id)}
                    >
                      Reject
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="text-center text-white">No requests found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PendingRequests;
