 "use client"
 import React from 'react' 
 import { useState } from 'react'

import UploadForm from '../upload/_components/UploadForm';
import { getFirestore } from "firebase/firestore";
import { collection, setDoc, doc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/filrebaseConfig';
import { generateRandomString } from '@/app/_utils/RandomString'

function Files({uploadBtnClickHandler}) {   
   const [progress, setProgress] = useState(0); 
   const {user} = useUser();

  //  for file uploading and geting downloadURL of the url
  const storage = getStorage(app);
  const db = getFirestore(app);
   const uploadFile = (file) => {
    const metadata = {
      contentType: file.type
    };
  
    const storageRef = ref(storage, 'fileSharingApp/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
  
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done'); 
        setProgress(progress);
        progress == 100 &&  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          // saveFileInfo(file, downloadURL);
        });
      }, ); 

      // for saving user file data in firebase database 
      // const saveFileInfo = async (file, fileUrl) => {
      //   const docId = generateRandomString().toString();
      //   await setDoc(doc(db, "uploadedFile", docId), {
      //     fileName: file?.name,
      //     fileSize: file?.size,
      //     fileType: file?.type,
      //     fileUrl: fileUrl,
      //     userEmail: user?.primaryEmailAddress.emailAddress,
      //     userName: user?.fullName,
      //     password: "",
      //     fileId: docId,
      //     shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
      //   });
      // };


   }
  return ( 
    // user button for signing out
    <div className="p-5 px md:px-28"> 
      <h1 className="text-[20px] text-center m-5">
       <strong className="text-primary"> Uploading </strong> 
        File and  
       <strong className="text-primary"> Share </strong> 
        it
        </h1>
      <UploadForm 
       uploadBtnClickHandler={(file) => uploadFile(file)}
        progress={progress}/>
     
    </div>
  )
}

export default Files