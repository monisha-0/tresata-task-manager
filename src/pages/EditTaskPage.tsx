import { Button, Container, MenuItem, TextField, Box, Select, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import Header from "../components/Header";
import { useTasks } from "../hooks/useTasks";
import { useEffect, useState } from "react";
import type { TaskStatus } from "../types/task";
import { STATUS_CONFIG } from "../utils/statusConfig";

export default function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();

  const task = tasks?.find((t) => t.id === id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("pending");

  useEffect(() => {
    if (task) {
      setTitle(task?.title);
      setDescription(task?.description || "");
      setStatus(task?.status);
      return () => {
        resetForm();
      };
    }
  }, [task]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  const handleCancel = () => {
    resetForm();
    navigate(-1);
  };

  const handleUpdate = () => {
    if (!task) return;
    updateTask(task?.id, { title, description, status });
    navigate("/");
  };

  if (!task) return null;
  return (
    <MobileLayout>
      <Header title="Edit Task" back />
      <Container sx={{ mt: 2 }}>
        <TextField fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField fullWidth multiline rows={3} sx={{ mt: 2 }} value={description} onChange={(e) => setDescription(e.target.value)} />
        <Select
          sx={{ marginTop: "1rem" }}
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          fullWidth
          renderValue={(value) => {
            const selected = STATUS_CONFIG[value as TaskStatus];
            return (
              <Stack direction="row" spacing={1} alignItems="center">
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: selected.color,
                  }}
                />
                <Typography>{selected.label}</Typography>
              </Stack>
            );
          }}
        >
          {(Object.keys(STATUS_CONFIG) as TaskStatus[]).map((key) => {
            const statusItem = STATUS_CONFIG[key];
            return (
              <MenuItem key={key} value={key}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: statusItem.color,
                    }}
                  />
                  <Typography>{statusItem.label}</Typography>
                </Stack>
              </MenuItem>
            );
          })}
        </Select>

        <Stack direction="row" justifyContent="space-between" spacing={2} mt={3}>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleUpdate} disabled={!task || !title.trim()}>
            Update
          </Button>
        </Stack>
      </Container>
    </MobileLayout>
  );
}
