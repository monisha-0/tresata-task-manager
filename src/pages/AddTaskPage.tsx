import { Button, Container, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import Header from "../components/Header";
import { useTasks } from "../hooks/useTasks";
import { useState } from "react";
import type { TaskStatus } from "../types/task";

export default function AddTaskPage() {
  const { addTask } = useTasks();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("pending");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  const handleCancel = () => {
    resetForm();
    navigate("/");
  };

  const handleAddTask = () => {
    addTask(title, description);
    navigate("/");
  };

  return (
    <MobileLayout>
      <Header title="Add Task" back />
      <Container sx={{ mt: 2 }}>
        <TextField fullWidth label="Enter the title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField fullWidth multiline rows={3} label="Enter the description" sx={{ mt: 2 }} value={description} onChange={(e) => setDescription(e.target.value)} />
        <Stack direction="row" justifyContent="space-between" spacing={2} mt={3}>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddTask} disabled={!title.trim()}>
            Add Task
          </Button>
        </Stack>
      </Container>
    </MobileLayout>
  );
}
