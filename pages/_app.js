import React from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { DataProvider } from '../contexts/DataContext';

function MyApp({ Component, pageProps}) {
  const router = useRouter();
  // console.log('pageProps:', props);

    return (
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    );
  }

export default MyApp;