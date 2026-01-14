import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { Task } from "../types/task";
import TaskCard from "./TaskCard";

interface Props {
  title: string;
  tasks: Task[];
  defaultExpanded?: boolean;
  onDelete: (id: string) => void;
}

export default function TaskAccordion({ title, tasks, defaultExpanded = false, onDelete }: Props) {
  if (tasks.length === 0) return null;

  return (
    <Accordion defaultExpanded={defaultExpanded} disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box width="100%" display="flex" gap={1}>
          <Typography>{title}</Typography>
          <Typography fontWeight={600}>({tasks.length})</Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={() => onDelete(task.id)} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
