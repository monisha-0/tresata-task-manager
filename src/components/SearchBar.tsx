import { TextField } from '@mui/material';

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <TextField
      fullWidth
      placeholder="Search To-Do"
      size="small"
      value={value}
      onChange={e => onChange(e.target.value)}
      sx={{ mb: 2, backgroundColor: '#fff' }}
    />
  );
}
