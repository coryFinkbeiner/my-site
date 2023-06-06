import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (

    <div className='option-container'>
      <Link href="/">
        <img
          src="/path/to/image"
          alt="Image"
          className="option"
        />
      </Link>

      <Link href="/Resume">
        <img
          src="/path/to/image"
          alt="Image"
          className="option"
        />
      </Link>

      <Link href="/Projects">
        <img
          src="/path/to/image"
          alt="Image"
          className="option"
        />
      </Link>

      <Link href="/Contact">
        <img
          src="/path/to/image"
          alt="Image"
          className="option"
        />
      </Link>

      <Link href="/Contact">
        <img
          src="/path/to/image"
          alt="Image"
          className="option"
        />
      </Link>

    </div>
  );
};

export default Sidebar;
