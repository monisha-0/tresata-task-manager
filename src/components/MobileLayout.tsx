import { Box } from '@mui/material';

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        maxWidth: 390,
        mx: 'auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F5F6F8',
      }}
    >
      {children}
    </Box>
  );
}
