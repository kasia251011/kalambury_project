import { createBrowserRouter } from 'react-router-dom';
import StartPage from '../components/StartPage';
import SettingsPage from '../components/SettingsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />
  },
  {
    path: '/settings',
    element: <SettingsPage />
  }
]);

export default router;
