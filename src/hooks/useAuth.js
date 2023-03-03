import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  // selectIsVeryfied,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  // const isVeryfied = useSelector(selectIsVeryfied);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    // isVeryfied,
  };
};
