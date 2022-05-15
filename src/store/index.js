import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzasReducer from "./pizzas/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pizzas: pizzasReducer,
  },
});

export default store;
