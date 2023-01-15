import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Task } from "../../types/types";

type InitialState = {
  favList: Task[];
};

const initialState: InitialState = {
  favList: [],
};
console.log(initialState);
const favTaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<Task>) => {
      state.favList.push(action.payload);
    },
  },
});

export const favActions = favTaskSlice.actions;
const reducer = favTaskSlice.reducer;
export default reducer;
