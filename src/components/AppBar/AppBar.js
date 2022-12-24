import { AppWrapper, AppBarLink } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppWrapper>
      <div>
        <AppBarLink to="home">Home</AppBarLink>
        {isLoggedIn && <AppBarLink to="contacts">Contacts</AppBarLink>}
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppWrapper>
  );
};
