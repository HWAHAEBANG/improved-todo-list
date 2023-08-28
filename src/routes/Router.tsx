import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';
import LandingPage from '../pages/LandingPage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import TodoPage from '../pages/TodoPage';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/signin',
        element: (
          <PublicRoute>
            <SigninPage />
          </PublicRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        ),
      },
      {
        path: '/todo',
        element: (
          <ProtectedRoute>
            <TodoPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default Router;
