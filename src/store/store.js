import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import todoSlice from "./reducers/todoSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    todoSlice,
  },
});
