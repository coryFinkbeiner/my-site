import React, { useState } from 'react';
import AboutMe from '../components/AboutMe'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import NavBar from '../components/NavBar'
import { NavProvider } from '../contexts/nav-context';




function Home() {




  return (
    <NavProvider>
      <div className='container'>
        <div className='top'>
          <div className='left'>
            <NavBar />

          </div>
          <div className='center'>

          </div>
        </div>
      </div>
    </NavProvider>
  );
}

export default Home