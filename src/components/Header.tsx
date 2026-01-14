import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function Header({ title, back }: { title: string; back?: boolean }) {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        {back && (
          <IconButton edge="start" onClick={() => navigate(-1)}>
            <ArrowBackIcon sx={{ color: '#fff' }} />
          </IconButton>
        )}
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}
