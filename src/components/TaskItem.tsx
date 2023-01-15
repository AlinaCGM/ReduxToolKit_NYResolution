import React, { useState } from "react";
import { Task } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/slice/task";
import { favActions } from "../redux/slice/favTask";
import { RootState } from "../redux/store";
import { Box, Typography, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";

type Prop = {
  item: Task;
};

function TaskItem({ item }: Prop) {
  const dispatch = useDispatch();

  const favList = useSelector((state: RootState) => state.favorite.favList);

  function deleteTask() {
    dispatch(actions.removeTask(item.task));
  }

  const isDuplicated = favList.some(
    (favItem) =>
      favItem.task.toLocaleLowerCase() === item.task.toLocaleLowerCase()
  );
  let isFavorite = favList.some((element) => element.taskId === item.taskId);

  const [open, setOpen] = useState(false);

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

  return (
    <Box>
      <Typography>Task</Typography>
      <Typography>{item.task}: </Typography>
      <Typography> {item.date?.toDate().toLocaleString()}</Typography>
      <Button onClick={deleteTask}>Delete</Button>
      <IconButton
        aria-label="addFav"
        sx={{ color: isFavorite ? red[500] : "primary" }}
        onClick={() => {
          isDuplicated ? handleClick() : dispatch(favActions.addFav(item));
        }}
      >
        <FavoriteIcon />
      </IconButton>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          The resolution is inside favorite list!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default TaskItem;
