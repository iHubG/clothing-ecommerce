import type { RouteObject } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound'

export const routes: RouteObject[] = [
  {
    element: <Layout />, 
    children: [
      { path: '/', element: <Home /> },
    ],
  },
  {
    path: '*', 
    element: <NotFound />,
  },
];
