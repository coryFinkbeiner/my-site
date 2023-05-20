import React from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function MyApp({ Component, pageProps, portfolioData }) {
  const router = useRouter();
  console.log(pageProps.portfolioData);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}



export async function getStaticProps() {
  const collectionRef = collection(db, 'portfolio');
  const querySnapshot = await getDocs(collectionRef);

  console.log({querySnapshot, collectionRef})

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  console.log({data})

  return {
    props: {
      portfolioData: data,
    },
  };
}





export default MyApp;