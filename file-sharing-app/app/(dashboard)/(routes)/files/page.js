 "use client"
 import React from 'react' 
 import { useState } from 'react'
import {  SignIn, UserButton} from '@clerk/nextjs'
import { Upload } from 'lucide-react'
import UploadForm from '../upload/_components/UploadForm';


import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/filrebaseConfig';

function Files({uploadBtnClickHandler}) {   
   const [progress, setProgress] = useState(0);

  //  for file uploading and geting downloadURL of the url
  const storage = getStorage(app);
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
        });
      }, );


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