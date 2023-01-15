import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/task";
import favReducer from "./slice/favTask";

const store = configureStore({
  reducer: { task: taskReducer, favorite: favReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//type for the State
export type RootState = ReturnType<typeof store.getState>;
export default store;
