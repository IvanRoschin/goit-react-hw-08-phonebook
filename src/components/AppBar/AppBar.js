import { Header } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import Box from '@mui/material/Box';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '15px',
        }}
      >
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Header>
  );
};
