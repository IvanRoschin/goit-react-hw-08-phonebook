import errorImage from '../components/images/404.png';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NotFound = () => {
  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          alignItems: 'center',
        }}
      >
        <img src={errorImage} alt="Error 404" width="460" />

        <Typography variant="h2" component="h2" align="center" color="#1976d2">
          Error 404 - Page not found
        </Typography>
        <Button
          type="button"
          variant="contained"
          sx={{ mt: 3, mb: 2, maxWidth: '160' }}
          href="/goit-react-hw-08-phonebook"
        >
          Go to Home page
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
