import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Resume">Resume</Link>
        </li>
        <li>
          <Link href="/Projects">Projects</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>

  );
};

export default Sidebar;

