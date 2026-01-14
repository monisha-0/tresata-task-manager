import { Card, CardContent, Typography, Stack, IconButton, Box, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import type { Task } from "../types/task";
import { STATUS_CONFIG } from "../utils/statusConfig";

export default function TaskCard({ task, onDelete }: { task: Task; onDelete: () => void }) {
  const navigate = useNavigate();
  const status = STATUS_CONFIG[task.status];

  return (
    <Card sx={{ mb: 1, "&:hover .actions": { opacity: 1 } }}>
      <CardContent sx={{padding: "1rem"}}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{
              bgcolor: "transparent",
              color: "primary.main",
              border: "2px solid",
              borderColor: "primary.main",
              width: 32,
              height: 32,
              fontSize: 16,
              alignSelf: "flex-start",
            }}
          >
            {task.title.charAt(0).toUpperCase()}
          </Avatar>

          <Box flex={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography color="primary" fontWeight={600}>
                {task.title}
              </Typography>

              <Stack direction="row" spacing={0.5} alignItems="center">
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: status.color,
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  {status.label}
                </Typography>
              </Stack>
            </Stack>

            {task.description && <Typography variant="body2">{task.description}</Typography>}

            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography paddingTop="0.5rem" variant="caption">
                {new Date(task.createdAt).toDateString()}
              </Typography>

              <Stack
                direction="row"
                spacing={0.5}
                className="actions"
                sx={{
                  opacity: 0,
                  transition: "opacity 0.2s",
                }}
              >
                <IconButton size="small" onClick={() => navigate(`/edit/${task.id}`)}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={onDelete} color="error">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
