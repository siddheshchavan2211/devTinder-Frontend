import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [],
  },
  reducers: {
    addFeed: (state, action) => {
      state.feed = action.payload;
    },
    filterfeed: (state, action) => {
      state.feed = state.feed.filter((req) => req._id !== action.payload);
    },
  },
});

export const { addFeed, filterfeed } = FeedSlice.actions;

export default FeedSlice.reducer;
