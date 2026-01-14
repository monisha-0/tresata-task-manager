import { Box, Container } from "@mui/material";
import { useState } from "react";
import MobileLayout from "../components/MobileLayout";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FloatingAddButton from "../components/FloatingAddButton";
import TaskAccordion from "../components/TaskAccordion";
import { useTasks } from "../hooks/useTasks";

export default function TodoListPage() {
  const { tasks, deleteTask } = useTasks();
  const [query, setQuery] = useState("");

  const filtered = tasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <MobileLayout>
      <Header title="TODO APP" />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          mt: 2,
          pb: 10,
        }}
      >
        <Container>
          <SearchBar value={query} onChange={setQuery} />

          <TaskAccordion title="In Progress" tasks={filtered.filter((t) => t.status === "in-progress")} defaultExpanded onDelete={deleteTask} />

          <TaskAccordion title="Pending" tasks={filtered.filter((t) => t.status === "pending")} onDelete={deleteTask} />

          <TaskAccordion title="Completed" tasks={filtered.filter((t) => t.status === "completed")} onDelete={deleteTask} />
        </Container>
      </Box>

      <FloatingAddButton />
    </MobileLayout>
  );
}
