import { createSlice } from "@reduxjs/toolkit";

const instituteSlice = createSlice({
  name: "institute",
  initialState: {
    instituteDetail: {},
  },
  reducers: {
    addInstitute: (state, action) => {
      state.instituteDetail = { ...action.payload };
    },
  },
});

export const { addInstitute } = instituteSlice.actions;
export default instituteSlice.reducer;
