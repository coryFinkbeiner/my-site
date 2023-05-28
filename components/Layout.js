import React from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  const router = useRouter();

  return (

    <div className='container'>
      <div className='top'>
        <Header />
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