import React from 'react';
import NavBar from '../components/NavBar'
import { useNav } from '../contexts/nav-context';




function Home() {

  const { navChoice } = useNav()


  return (

      <div className='container'>
        <div className='top'>
          <div className='left'>
            <NavBar />

          </div>
          <div className='center'>

          </div>
        </div>
      </div>

  );
}

export default Home