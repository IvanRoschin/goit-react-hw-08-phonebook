import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
// const NotFound = lazy(() => import('../pages/404/404'));
const ContactPage = lazy(() => import('../pages/Contacts'));

// const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" end element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //      <Route index element={<HomePage />} />
    //      <Route
    //       path="/register"
    //       element={
    //         <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
    //       }
    //     />
    //     <Route
    //       path="/login"
    //       element={
    //         <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
    //       }
    //     />
    //     <Route
    //       path="/tasks"
    //       element={
    //         <PrivateRoute redirectTo="/login" component={<TasksPage />} />
    //       }
    //     />
    //    </Route>
    // </Routes>
  );
};