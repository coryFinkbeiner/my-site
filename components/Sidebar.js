import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
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
    </aside>
  );
};

export default Sidebar;