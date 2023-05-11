import React from 'react';
import { useNav } from '../contexts/nav-context';

function NavBar() {
  const { handleItemClick } = useNav();

  return (
    <ul>
      <li onClick={() => handleItemClick('AboutMe')}>About Me</li>
      <li onClick={() => handleItemClick('Resume')}>Resume</li>
      <li onClick={() => handleItemClick('Projects')}>Projects</li>
      <li onClick={() => handleItemClick('ContactMe')}>Contact Me</li>
    </ul>
  );
}

export default NavBar;