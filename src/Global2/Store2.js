import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Context2";
export const store = configureStore({
  reducer: { myReducer },
});
