import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';
import LandingPage from '../pages/LandingPage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import TodoPage from '../pages/TodoPage';

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
        element: <SigninPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/todo',
        element: <TodoPage />,
      },
    ],
  },
]);

export default Router;
