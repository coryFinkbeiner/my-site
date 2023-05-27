import React, { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';



function Resume() {
  const [resumeURL, setResumeURL] = useState(null);

  useEffect(() => {
    const storage = getStorage();
    const resumeRef = ref(storage, 'gs://my-site-c426f.appspot.com/Rezzzz (10).pdf');

    getDownloadURL(resumeRef)
      .then((url) => {
        setResumeURL(url);
      })
      .catch((error) => {
        console.log('Error retrieving resume URL:', error);
      });
  }, []);

  return (
    <div>
      <h1>Resume</h1>
      {resumeURL ? (
        <div>
          <style>{`
            #sidebarToggle, .toolbarButton.pageUp, .toolbarButton.pageDown {
              display: none !important;
            }
          `}</style>
          <iframe src={resumeURL} title="Resume" width="100%" height="600px" />
        </div>
      ) : (
        <p>Loading resume...</p>
      )}
    </div>
  );
}

export default Resume;

// change to image instead of pdf file.
// add link to pdf as well.

// default view is