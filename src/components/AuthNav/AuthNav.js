import { NavList, Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <NavList>
      <li>
        <Link to="register">Registration</Link>
      </li>
      <li>
        <Link to="login">Login</Link>
      </li>
    </NavList>
  );
};

export default AuthNav;
