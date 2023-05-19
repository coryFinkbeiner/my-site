import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Resume = ({ resumeData }) => {
  // console.log(resumeData)

  return (
    <div>
      REZZZ
    </div>
  );
};

export async function getStaticProps() {
  try {
    // Fetch resume data from Firestore
    const resumeDocRef = firebase.firestore().collection('portfolio').doc('FI3FKEkO6BKCQCaLAYWK');
    const resumeDoc = await resumeDocRef.get();

    console.log({resumeDoc})
    

  //   if (resumeDoc.exists) {
  //     const resumeData = resumeDoc.data();
  //     console.log({resumeData})
  //     return {
  //       props: {
  //         resumeData
  //       },
  //     };
  //   } else {
  //     console.log('Resume document does not exist.');
  //     return {
  //       props: {
  //         resumeData: null
  //       },
  //     };
  //   }
  // } catch (error) {
  //   console.error('Error retrieving resume from Firestore:', error);
  // }

  return {
    props: {
      resumeData: null
    },
  };
}

export default Resume;
