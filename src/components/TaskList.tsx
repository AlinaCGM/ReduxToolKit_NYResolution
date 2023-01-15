import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import TaskItem from "./TaskItem";
// import * as uuid from "uuid";

function TaskList() {
  const list = useSelector((state: RootState) => state.task.taskList);

  // const taskId = uuid.v4();
  console.log(list, "LIST");
  return (
    <div>
      <h5>TaskList</h5>
      {list.map((item, index) => (
        <TaskItem key={index} item={item} />
      ))}
    </div>
  );
}

export default TaskList;
