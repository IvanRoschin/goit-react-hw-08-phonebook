import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import desktop from '../components/images/desktop.png';
import logo from '../components/images/logo.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box>
      <Typography
        sx={{ typography: { xs: 'h3', lg: 'h1' } }}
        component="h1"
        color="#1976d2"
      >
        Welcome to <br />
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 10,
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box>
          <Link to="/register">
            <img src={logo} alt="logo"></img>
          </Link>
          <Typography variant="h6" component="h2">
            PhoneBook is an online directory
            <br />
            that helps users easily find contact details
          </Typography>
        </Box>
        <img src={desktop} alt="desktop"></img>
      </Box>
    </Box>
  );
}
