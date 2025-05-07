import React from 'react';
import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const hideHeader = location.pathname === '/';

  return (
    <div className='display-flex'>
      <Header hideHeaderButtons={hideHeader} />
      <div className='page-main-content-outlet'>
        <Outlet />
      </div>
      
    </div>
  );
}
