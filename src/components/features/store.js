import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/contactSlice";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
