"use client";
import React, { useState, useEffect } from 'react';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import  app  from './../../_utils/filrebaseConfig';
import FileItem from './components/FileItem';
function FileView({ params }) {
  const db = getFirestore(app);
  const [fileInfo, setFileInfo] = useState(null);

  useEffect(() => {
    if (params?.fileId) {
      console.log("Document ID:", params.fileId);
      getFileInfo();
    }
  }, [params?.fileId]); // Dependency array includes fileId to trigger re-fetch on change

  const getFileInfo = async () => {
    try {
      const docRef = doc(db, "uploadedFile", params?.fileId); // Corrected 'fileId'
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setFileInfo(docSnap.data()); // Set the fetched data into state
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  return (
    <div className='text-white flex 
    flex-col justify-center h-screen w-full gap-4 items-center'>
     <FileItem file={fileInfo}/>
    </div>
  );
}

export default FileView;
