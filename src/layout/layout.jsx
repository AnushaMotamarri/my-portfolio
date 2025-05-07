import React from 'react';
import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const hideHeader = location.pathname === '/';

  return (
    <>
      <Header hideHeaderButtons={hideHeader} />
      <Outlet />
    </>
  );
}
