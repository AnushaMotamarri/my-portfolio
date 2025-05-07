import React from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function NotFound() {
  return (
    <div style={{ padding: 50,height:'80vh', textAlign: 'center',display:'flex',justifyContent:'center',flexDirection:'column', alignItems:'center' }}>
        
      <h1><WarningAmberIcon style={{color: 'red'}}/>{' '}404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}