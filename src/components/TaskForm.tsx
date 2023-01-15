import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Container, Button, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import AlertTitle from "@mui/material/AlertTitle";
import { v4 as uuidv4 } from "uuid";

import { actions } from "../redux/slice/task";
import { Task } from "../types/types";
import TaskList from "./TaskList";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TaskForm() {
  const randomId = uuidv4();
  const dispatch = useDispatch();
  const [input, setInput] = useState<Task>({
    task: "",
    date: dayjs(Date.now()),
    taskId: randomId,
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleTask(event: React.ChangeEvent<HTMLInputElement>) {
    setInput({ ...input, task: event.target.value });
  }
  function handleDate(newValue: Dayjs | null) {
    setInput({ ...input, date: newValue });
  }

  const submitTask: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (input.task === "" || input.date === null) {
      handleClick();
    } else {
      setInput({ ...input, taskId: randomId });
      dispatch(actions.addTask(input));
    }
    setInput({ ...input, task: "" });
  };
  return (
    <Container>
      <Typography style={{ marginBottom: "50px" }}>Resolution Form</Typography>
      <TextField
        id="filled-basic"
        label="new resolution "
        variant="filled"
        onChange={handleTask}
        value={input.task}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={input.date}
          onChange={handleDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button variant="outlined" onClick={submitTask}>
        Add
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="success" onClose={handleClose}>
          <AlertTitle>Success</AlertTitle>A new resolution is added—
          <strong>check it out!</strong>
        </Alert>
      </Snackbar>
      <TaskList />
    </Container>
  );
}

export default TaskForm;
