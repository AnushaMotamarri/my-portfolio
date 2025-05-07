import React from 'react';
import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <div className='display-flex'>
      <Header  />
      <div className='page-main-content-outlet'>
        <Outlet />
      </div>
      
    </div>
  );
}
