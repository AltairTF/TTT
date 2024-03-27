import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../views/App';
import { Menu } from '../views/Menu';
import { Tabletop } from '../views/Tabletop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/menu" replace />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'tabletop',
        element: <Tabletop />,
      },
    ],
  },
]);
