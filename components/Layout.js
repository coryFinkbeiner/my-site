import React from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const router = useRouter();

  // Handle navigation event, e.g., when clicking a button
  const handleNavigation = () => {
    router.push('/about');
  };

  return (
    <div className="layout">
      <Sidebar />
      <main>
        {children}
        <button onClick={handleNavigation}>Go to About</button>
      </main>
    </div>
  );
};

export default Layout;