import { createSlice } from "@reduxjs/toolkit";

const showFriends = createSlice({
  name: "showFriends",
  initialState: {
    friends: [],
    requests: [],
  },
  reducers: {
    addFriends: (state, action) => {
      state.friends = action.payload;
    },
    showRequests: (state, action) => {
      state.requests = action.payload;
    },
    remooveFriends: (state, action) => {
      state.friends = action.payload;
    },
    removeRequest: (state, action) => {
      state.requests = state.requests.filter(
        (req) => req._id !== action.payload
      );
      return state;
    },
  },
});
export const { addFriends, remooveFriends, showRequests, removeRequest } =
  showFriends.actions;
export default showFriends.reducer;
