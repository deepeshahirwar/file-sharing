"use client"
import React from 'react'
import { useEffect , useState} from 'react' 
import { getFirestore, updateDoc } from "firebase/firestore";
import { app } from '@/filrebaseConfig'; 
import { doc, getDoc } from "firebase/firestore";
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
import { ArrowLeftSquare } from 'lucide-react';
import Link from 'next/link';
function FilePreview({params}) { 
   const db = getFirestore(app); 
     const [fileInfo, setFileInfo] = useState()
    useEffect(() => {
        console.log(params?.fileld)
       params?.fileld && getFileInfo()
    }, []) 
 
    // for getting file info from firestore database
 const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileld);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        console.log("Document data:", docSnap.data()); 
        setFileInfo(docSnap.data())
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
} 

const onPasswordSave = async(password) => { 
  const docRef = doc(db, "uploadedFile", params?.fileld);
   await updateDoc(docRef, {
     password: password
   })
  console.log(password)
}

  return ( 
    <div className="p-5">  

      <Link href="/files" 
      className="text-primary 
      flex items-center gap-3 hover:text-blue-700"
      >
        <ArrowLeftSquare/>
      Go back to files</Link>
    

    <div  className="flex justify-between 
    items-center  mt-16
    md:grid-cols-2"> 
      <FileInfo fileInfo={fileInfo}/> 
      <FileShareForm fileInfo={fileInfo}
      onPasswordSave={(password)=>onPasswordSave(password) }
      />
    </div> 
    </div>
  )
}

export default FilePreview;