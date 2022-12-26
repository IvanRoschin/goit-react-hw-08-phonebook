import { useAuth } from 'hooks';
import { NavList, Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        )}
      </NavList>
    </nav>
  );
};

export default Navigation;
