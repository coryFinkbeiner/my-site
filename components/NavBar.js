import React from 'react';
import { useNav } from '../contexts/nav-context';

function NavBar() {
  const { handleItemClick } = useNav();

  return (
    <ul>
      <li onClick={() => handleItemClick('About')}>A</li>
      <li onClick={() => handleItemClick('Resume')}>R</li>
      <li onClick={() => handleItemClick('Projects')}>P</li>
      <li onClick={() => handleItemClick('Contact')}>C</li>
    </ul>
  );
}

export default NavBar;