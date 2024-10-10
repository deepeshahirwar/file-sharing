"use client"
import React from 'react'
import { useEffect } from 'react' 
import { getFirestore } from "firebase/firestore";
import { app } from '@/filrebaseConfig'; 
import { doc, getDoc } from "firebase/firestore";

function FilePreview({params}) { 
   const db = getFirestore(app);
    useEffect(() => {
        console.log(params?.fileld)
       params?.fileld && getFileInfo()
    }, []) 

 const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileld);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

  return (
    <div>FilePreview</div>
  )
}

export default FilePreview;