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
      {resumeURL ? (
        <div>
          <style>{`
            #sidebarToggle, .toolbarButton.pageUp, .toolbarButton.pageDown {
              display: none !important;
            }
            { border: 'none' }
          `}</style>
          <iframe src={resumeURL} title="Resume" width="100%" height="950px" />
        </div>
      ) : (
        <p>Loading resume...</p>
      )}
    </div>
  );
}

export default Resume;

