import React from 'react';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='display-flex'>
      <Header  />
      <div className='page-main-content-outlet'>
        <Outlet />
      </div>
      
    </div>
  );
}
