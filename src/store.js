import { configureStore } from "@reduxjs/toolkit";

import arrayReducer from "./reducers/arraySlice";

const store = configureStore({
  reducer: {
    array: arrayReducer,
  },
});

export default store;