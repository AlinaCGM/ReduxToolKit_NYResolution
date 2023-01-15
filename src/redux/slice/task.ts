import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Task } from "../../types/types";

type InitialState = {
  taskList: Task[];
};

const initialState: InitialState = {
  taskList: [],
};
console.log(initialState);
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.taskList.push(action.payload);
    },
    removeTask: (state, action) => {
      state.taskList.splice(action.payload, 1);
    },
  },
});

export const actions = taskSlice.actions;
const reducer = taskSlice.reducer;
export default reducer;
