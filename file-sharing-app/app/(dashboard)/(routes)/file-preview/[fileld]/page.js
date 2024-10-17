"use client";
import React, { useEffect, useState } from 'react'; 
import { getFirestore, updateDoc, doc, getDoc } from "firebase/firestore";
import app from "./../../../../_utils/filrebaseConfig";
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
import { ArrowLeftSquare } from 'lucide-react';
import Link from 'next/link';

function FilePreview({ params }) { 
  const db = getFirestore(app); 
  const [fileInfo, setFileInfo] = useState(null);

  useEffect(() => {
    if (params?.fileld) {
      console.log("Document ID:", params.fileld); 
      getFileInfo();
    }
  }, [params?.fileld]);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileld);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) { 
      console.log("Document data:", docSnap.data());
      setFileInfo(docSnap.data()); // Set the fetched data into state
    } else {
      console.log("No such document!");
    }
  };

  const onPasswordSave = async (password) => { 
    const docRef = doc(db, "uploadedFile", params?.fileld);
    await updateDoc(docRef, { password });
    console.log("Password updated:", password);
  };

  return ( 
    <div className="p-5">  
      <Link href="/files" className="text-primary flex items-center gap-3 hover:text-blue-700">
        <ArrowLeftSquare />
        Go back to files
      </Link>
      
      <div className="flex justify-between items-center mt-16 md:grid-cols-2"> 
        <FileInfo fileInfo={fileInfo} /> 
        <FileShareForm file={fileInfo} onPasswordSave={onPasswordSave} />
      </div>
    </div>
  );
}

export default FilePreview;
