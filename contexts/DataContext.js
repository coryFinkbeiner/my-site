import React, { createContext, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';

// Create a new context
const DataContext = createContext();

// Create a custom hook to access the data from the context
function useData() {
  return useContext(DataContext);
}

function DataProvider({ children }) {
  // Fetch the document from Firestore in the provider
  const fetchData = async () => {
    try {
      const collectionRef = collection(db, 'portfolio');
      const querySnapshot = await getDocs(collectionRef);

      if (querySnapshot.empty) {
        throw new Error('No documents found in the "portfolio" collection.');
      }

      const [firstDocument] = querySnapshot.docs;
      const documentData = firstDocument.data();

      // Store the fetched data in the state
      // You can also perform any additional data manipulation or filtering here
      // before storing it in the state
      setData(documentData);
    } catch (error) {
      console.error(error);
    }
  };

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  // Provide the data to the components via context
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, useData };
