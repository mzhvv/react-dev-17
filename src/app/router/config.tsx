// src/app/router/config.tsx

import { Navigate } from 'react-router-dom';

import { createRoute, createRouteConfig } from '@package/router';

import { AppLayout } from '@/pages/app-layout';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';

// #region routeObject
// #endregion routeObject

// #region route

// Маршруты
const route = createRoute([]);

// #region Базовые маршруты

const systemRoute = createRoute([
  {
    path: '/404',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
]);

export const routeConfig = createRouteConfig([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      ...systemRoute,
      ...route,
    ],
  },
]);

// #endregion
// #endregion route
