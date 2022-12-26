import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import desktop from '../components/images/desktop.jpg';
import logo from '../components/images/logo.jpg';
import { Link } from 'react-router-dom';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 50px)',
        position: 'relative',
      }}
    >
      <Typography variant="h1" component="h1" color="#1976d2">
        Welcome to <br />
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 10,
        }}
      >
        <Box sx={{ marginTop: 20 }}>
          <Link to="/register">
            <img src={logo} alt="logo"></img>
            <Typography variant="h6" component="h2">
              PhoneBook is an online directory
              <br />
              that helps users easily find contact details
            </Typography>
          </Link>
        </Box>
        <img src={desktop} alt="desktop"></img>
      </Box>
    </Box>
  );
}
