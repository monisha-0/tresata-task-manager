import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function FloatingAddButton() {
  const navigate = useNavigate();

  return (
    <Fab
      color="primary"
      onClick={() => navigate('/add')}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 'calc(50% - 170px)',
      }}
    >
      <AddIcon />
    </Fab>
  );
}
