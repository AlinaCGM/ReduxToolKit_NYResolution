import dayjs, { Dayjs } from "dayjs";

export type Task = {
  task: string;
  date: Dayjs | null;
  taskId: string;
};
