import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "initialData",
  initialState: [],
  reducers: {
    addCampData: (state, action) => {
      return action.payload.data;
    },
    addFormData: (state, action) => {
      return action.payload.data;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
