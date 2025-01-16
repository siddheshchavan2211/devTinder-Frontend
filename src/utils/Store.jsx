import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import showFriends from "./showFriendsSlice";
const Store = configureStore({
  reducer: {
    user: userSlice,
    showFriends: showFriends,
  },
});
export default Store;
