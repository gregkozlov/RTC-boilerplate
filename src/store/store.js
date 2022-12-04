import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import todoSlice from "./reducers/todoSlice";
import postSlice from "./reducers/postSlice";

const rootReducer = combineReducers({
  userSlice,
  todoSlice,
  postSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
