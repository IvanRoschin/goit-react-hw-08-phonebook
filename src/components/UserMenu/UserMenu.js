import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, P } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handlelogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <P>Welcome, {user.name}</P>
      <IconButton type="button" onClick={handlelogOut}>
        <LogoutIcon />
      </IconButton>
    </Wrapper>
  );
};
