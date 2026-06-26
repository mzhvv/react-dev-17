// src/app/router/config.tsx

import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { AppLayout } from '../../pages/app-layout';
import { HomePage } from '../../pages/home';
import { NotFoundPage } from '../../pages/not-found';

// #region routeObject
// #endregion routeObject

// #region route
// #region helpers

type /*NotIndexAtTopLevel*/ CreateRouteProps = Omit<RouteObject, 'index' | 'children'> & {
  children?: RouteObject[];
};
/**
 * Защищает от случайных `index` на верхнем уровне
 */
function /*createNotIndexRouteAtTopLevel*/ createRoute(
  props: CreateRouteProps[]
): CreateRouteProps[] {
  return props;
}

/**
 * Соответствует официальному API `react-router-dom` — `RouteObject`
 */
function createRouteConfig(props: RouteObject[]): RouteObject[] {
  return props;
}

// #endregion

// Расширение маршрутов
export const contentRoute = createRoute([]);

// #region Базовые маршруты

export const systemRoute = createRoute([
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
    ],
  },
]);

// #endregion
// #endregion route
