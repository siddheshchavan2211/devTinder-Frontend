import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ApiUrl } from "../utils/Constants";
import { addFeed } from "../utils/FeedSlice";
import { useEffect } from "react";
import FeedCard from "./FeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector((store) => store.feed.feed);
  const handlefeed = async () => {
    try {
      const res = await axios.get(ApiUrl + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data.data));
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    handlefeed();
  }, []);
  if (!getUsers)
    return (
      <div className="mx-auto text-4xl flex justify-center items-center text-red-400">
        No More Users
      </div>
    );
  if (getUsers.length <= 0)
    return (
      <div
        className="flex justify-center h-screen  w-full"
        style={{
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${"https://png.pngtree.com/background/20230616/original/pngtree-faceted-abstract-background-in-3d-with-shimmering-iridescent-metallic-texture-of-picture-image_3653595.jpg"})`,
        }}
      >
        <h1 className=" flex justify-center my-28 text-3xl lg:text-4xl text-white font-bold">
          No More Match Founds
        </h1>
      </div>
    );

  return (
    getUsers && (
      <div
        className="flex justify-center h-screen  w-full"
        style={{
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${"https://png.pngtree.com/background/20230616/original/pngtree-faceted-abstract-background-in-3d-with-shimmering-iridescent-metallic-texture-of-picture-image_3653595.jpg"})`,
        }}
      >
        <FeedCard data={getUsers[0]} />
      </div>
    )
  );
};
export default Feed;
