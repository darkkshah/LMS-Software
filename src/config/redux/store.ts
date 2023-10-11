import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import instituteSlice from "./reducers/instituteSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    institute: instituteSlice,
  },
});

export default store;
