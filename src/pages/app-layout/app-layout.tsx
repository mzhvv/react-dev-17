// src/pages/app-layout/app-layout.tsx

import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <>
      <div>
        <header></header>
        <Outlet />
        <footer></footer>
      </div>
    </>
  );
};
