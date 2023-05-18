import React from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const router = useRouter();

  // // Handle navigation event, e.g., when clicking a button
  // const handleNavigation = () => {
  //   router.push('/about');
  // };

  return (

    <div className='container'>
      <div className='top'>
        <div className='left'>
          <Sidebar />
        </div>
        <main className='center'>
          {children}
        </main>
      </div>
    </div>

  );
};

export default Layout;