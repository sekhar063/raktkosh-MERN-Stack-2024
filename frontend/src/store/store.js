import { configureStore } from "@reduxjs/toolkit";
import fetchStatusSlice from "./fetchStatusSlice.js";
import dataSlice from "./dataSlice.js";
import authSlice from "./authSlice.js";
import userSlice from "./userSlice.js";

const raktkoshStore = configureStore({
  reducer: {
    fetchStatus: fetchStatusSlice.reducer,
    initialData: dataSlice.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
});
export default raktkoshStore;
