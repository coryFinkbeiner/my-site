import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { useData } from '../contexts/DataContext';

function Home() {
  const data = useData();


  console.log('Home', data)

  return (
    <div>
      Home
    </div>
  );
}


export default Home;