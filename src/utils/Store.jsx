import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import showFriends from "./showFriendsSlice";
import FeedSlice from "./FeedSlice";
const Store = configureStore({
  reducer: {
    user: userSlice,
    showFriends: showFriends,
    feed: FeedSlice,
  },
});
export default Store;
