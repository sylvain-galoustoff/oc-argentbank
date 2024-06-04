import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import toastReducer from "./toastReducer";

const rootReducer = combineReducers({
  user: userReducer,
  toast: toastReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
