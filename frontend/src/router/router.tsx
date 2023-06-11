import { createBrowserRouter } from 'react-router-dom';
import StartPage from '../components/StartPage';
import SettingsPage from '../components/SettingsPage';
import SlogansList from '../components/SettingsPage/SlogansList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />
  },
  {
    path: '/settings',
    element: <SettingsPage />,
    children: [
      {
        path: '/settings/:id',
        element: <SlogansList />
      }
    ]
  }
]);

export default router;
