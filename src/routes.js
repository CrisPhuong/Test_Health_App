import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import RecordPage from './pages/Records';
import ColumnPage from './pages/Column';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/record',
    element: <RecordPage />,
  },
  {
    path: '/column',
    element: <ColumnPage />,
  },
]);

export default router;
