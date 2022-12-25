import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, P } from './UserMenu.styled';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import IconButton from '@mui/material/IconButton';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handlelogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <P>Welcome, {user.name}</P>
      <IconButton type="button" onClick={handlelogOut}>
        <MeetingRoomIcon />
      </IconButton>
    </Wrapper>
  );
};
