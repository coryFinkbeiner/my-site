import React from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';

function MyApp({ Component, pageProps, document }) {
  const router = useRouter();
  console.log('pp', document);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


export async function getStaticProps() {
  try {
    // Fetch the document from Firestore
    const collectionRef = collection(db, 'portfolio');
    const querySnapshot = await getDocs(collectionRef);

    // Check if there are any documents
    if (querySnapshot.empty) {
      throw new Error('No documents found in the "portfolio" collection.');
    }

    // Extract the first document from the query result
    const [firstDocument] = querySnapshot.docs;
    const documentData = firstDocument.data();

    console.log('in', documentData)

    return {
      props: {
        document: documentData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        document: null, // Set a default value or handle the error case as needed
      },
    };
  }
}

export default MyApp;