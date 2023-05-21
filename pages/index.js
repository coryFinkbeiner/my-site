import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';

function Home({ document }) {
  // console.log({document});

  return (
    <div>
      Home
    </div>
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

export default Home;