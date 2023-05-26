import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { useData } from '../contexts/DataContext';

function Home() {
  const data = useData();


  console.log('Home', data.resumePDF)

  return (
    <div>
      <h1>Resume</h1>
      <iframe src={'https://docs.google.com/document/d/1tVFoqOLU90ylo5AjPYnqpv90FOukAFjQst4mnfy1o-w/edit'} title="Resume" width="100%" height="600px" />
    </div>
  );
}


export default Home;