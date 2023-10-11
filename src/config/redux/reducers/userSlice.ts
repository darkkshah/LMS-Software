import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    personalDetail: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.personalDetail = { ...action.payload };
      console.log(state, action);
    },
    edit: () => {},
  },
});

export const { addUser, edit } = userSlice.actions;
export default userSlice.reducer;
