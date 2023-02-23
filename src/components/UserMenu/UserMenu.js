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
      <img src={user.avatarURL} alt="1" />
      <P> Welcome {user.email || user.user.email}</P>

      <IconButton type="button" onClick={handlelogOut}>
        <MeetingRoomIcon />
      </IconButton>
    </Wrapper>
  );
};
