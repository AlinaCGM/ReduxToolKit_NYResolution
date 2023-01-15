import React from "react";
import { Box, Typography } from "@mui/material";

import { Task } from "../../types/types";

type Prop = {
  item: Task;
};

function FavItem({ item }: Prop) {
  return (
    <Box>
      <Typography
        style={{
          border: "1px solid grey",
          width: "50%",
          height: "100px",
          margin: "auto",
        }}
      >
        {item.task}:{" "}
      </Typography>{" "}
    </Box>
  );
}

export default FavItem;
