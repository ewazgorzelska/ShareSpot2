import { createHashRouter } from 'react-router-dom';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import App from 'App';
import { ROUTES } from './paths';
import { LayoutRoute } from './LayoutRoute';

export const router = createHashRouter([
  {
    path: ROUTES.SIGNIN,
    element: (
      <LayoutRoute>
        <Login />
      </LayoutRoute>
    ),
  },
  {
    path: ROUTES.SIGNUP,
    element: (
      <LayoutRoute>
        <SignUp />
      </LayoutRoute>
    ),
  },
  {
    path: '/',
    element: (
      <LayoutRoute>
        <App />
      </LayoutRoute>
    ),
  },
]);
