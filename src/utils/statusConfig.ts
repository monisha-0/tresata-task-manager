import type { TaskStatus } from "../types/task";

export const STATUS_CONFIG: Record<TaskStatus, { label: string; color: string }> = {
  pending: {
    label: "Pending",
    color: "#F2994A",
  },
  "in-progress": {
    label: "In Progress",
    color: "#2F80ED",
  },
  completed: {
    label: "Completed",
    color: "#27AE60",
  },
};
