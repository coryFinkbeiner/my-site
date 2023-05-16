import React from 'react';
import NavBar from '../components/NavBar'
// import { useNav } from '../contexts/nav-context';

import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import { NavProvider, useNav } from '../contexts/nav-context';





function Home() {

  const { selectedComponent } = useNav()
  // console.log({selectedComponent})


  return (
    <NavProvider>
      <div className='container'>
        <div className='top'>
          <div className='left'>
            <NavBar />

          </div>
          <div className='center'>
            {selectedComponent}
          </div>
        </div>
      </div>
    </NavProvider>
  );
}

export default Home