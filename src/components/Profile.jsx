import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ApiUrl } from "../utils/Constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const existinguser = useSelector((store) => store.user.user);
  const { firstName, lastName, age, gender, mobile, skills, about, photoUrl } =
    existinguser;
  const [selectedImage, setSelectedImage] = useState(photoUrl);
  const [FirstName, setFname] = useState(firstName);
  const [LastName, setLname] = useState(lastName);
  const [Age, setAge] = useState(age);
  const [Gender, setGender] = useState(gender);
  const [Mobile, setMobile] = useState(mobile);
  const [Skills, setSkills] = useState(skills);
  const [About, setAbout] = useState(about);
  const [errors, setErrors] = useState();
  const [isUrlInput, setIsUrlInput] = useState(false); // State to toggle input types
  const dispatch = useDispatch();

  const handlesubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.patch(
        ApiUrl + "/editProfile",
        {
          firstName: FirstName,
          lastName: LastName,
          age: Age,
          gender: Gender,
          mobile: Mobile,
          skills: Skills,
          about: About,
          photoUrl: selectedImage, // Save the URL or file depending on the state
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.userdata));
      // Show success toast for 3 seconds
      toast.success("Profile updated successfully!", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
      });
      setErrors("");
    } catch (err) {
      setErrors(err.response.data);
      console.log(err);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
      });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the image as the state
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  const handleUrlChange = (e) => {
    setSelectedImage(e.target.value); // Directly update selected image from URL
  };

  return (
    <div
      className="top-0 left-0   p-6  w-full flex justify-between z-50 "
      style={{
        backgroundImage:
          "url('https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/10/tinder-1-ap-hero.jpg')",
      }}
    >
      {" "}
      <div className=" flex flex-col items-center mt-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-8 rounded-3xl shadow-lg max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Edit Profile</h1>

        <div
          className="relative w-36 h-36 rounded-full border-4 border-white bg-cover flex justify-center items-center cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          style={{
            backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
          }}
        >
          {!selectedImage && (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
              alt="placeholder"
              className="w-32 h-32 rounded-full object-cover"
            />
          )}
          {/* Pencil icon */}
          <label
            htmlFor="file-upload"
            className="absolute text-white text-2xl right-0 bottom-0 m-2 cursor-pointer"
            onClick={() => setIsUrlInput(!isUrlInput)} // Toggle input type
          >
            <FaEdit />
          </label>
        </div>

        {/* Conditional input display */}
        {isUrlInput ? (
          // URL input for image
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter Image URL"
              value={selectedImage}
              onChange={handleUrlChange}
              className="py-2 px-4 w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        ) : (
          // File upload input
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileChange}
            className="opacity-0 absolute"
          />
        )}

        {/* Rest of the form */}
        <div className="w-full flex flex-col gap-6 mt-8">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="first-name" className="text-white">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                className="mt-2 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setFname(e.target.value)}
                value={FirstName}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="last-name" className="text-white">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                className="mt-2 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setLname(e.target.value)}
                value={LastName}
              />
            </div>
          </div>

          <div>
            <label htmlFor="Skills" className="text-white">
              Skills
            </label>
            <input
              type="text"
              id="Skills"
              placeholder="Enter your Skills"
              className="mt-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
              onChange={(e) => setSkills(e.target.value)}
              value={Skills}
            />
          </div>
          <div>
            <label htmlFor="About" className="text-white">
              About
            </label>
            <input
              type="text"
              id="About"
              placeholder="Tell us About yourself"
              className="mt-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
              onChange={(e) => setAbout(e.target.value)}
              value={About}
            />
          </div>

          <div className="flex gap-4 mt-4">
            <div className="w-1/2">
              <label htmlFor="Age" className="text-white">
                Age
              </label>
              <input
                type="text"
                id="Age"
                placeholder="Enter your Age"
                className="mt-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                onChange={(e) => setAge(e.target.value)}
                value={Age}
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="Gender" className="text-white">
                Gender
              </label>
              <div className="flex gap-4 mt-2">
                <div>
                  <input
                    type="radio"
                    id="male"
                    checked={Gender === "male"}
                    onChange={(e) => setGender(e.target.id)}
                    className="mr-2 w-4 h-4"
                  />
                  <label htmlFor="male" className="text-white">
                    Male
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    checked={Gender === "female"}
                    onChange={(e) => setGender(e.target.id)}
                    className="mr-2 w-4 h-4"
                  />
                  <label htmlFor="female" className="text-white">
                    Female
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    checked={Gender === "other"}
                    onChange={(e) => setGender(e.target.id)}
                    id="other"
                    className="mr-2 w-4 h-4"
                  />
                  <label htmlFor="other" className="text-white">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="Mobile" className="text-white">
              Mobile
            </label>
            <input
              type="text"
              id="Mobile"
              placeholder="Enter your Mobile number"
              className="mt-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
              onChange={(e) => setMobile(e.target.value)}
              value={Mobile}
            />
          </div>
          <p className="text-white font-semibold">{errors}</p>
          <button
            onClick={handlesubmit}
            className="bg-cyan-600 text-white rounded-lg mt-6 px-6 py-3 hover:bg-cyan-700 transition duration-300"
          >
            Save Changes
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;
