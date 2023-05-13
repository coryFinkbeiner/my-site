import React from 'react';
import NavBar from '../components/NavBar'
// import { useNav } from '../contexts/nav-context';

import { NavProvider, useNav } from '../contexts/nav-context';




function Home() {

  const { navChoice } = useNav()
  console.log({navChoice})


  return (
    <NavProvider>
      <div className='container'>
        <div className='top'>
          <div className='left'>
            <NavBar />

          </div>
          <div className='center'>
            {navChoice && <navChoice />}
          </div>
        </div>
      </div>
    </NavProvider>
  );
}

export default Home