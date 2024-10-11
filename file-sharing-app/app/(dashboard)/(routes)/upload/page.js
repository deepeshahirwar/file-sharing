"use client"
import React, { useState, useEffect } from 'react'; // Merged imports
import UploadForm from '../files/_components/UploadForm';
import { getFirestore } from "firebase/firestore";
import { collection, setDoc, doc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/filrebaseConfig';
import { generateRandomString } from '@/app/_utils/RandomString';
import { useRouter } from 'next/navigation';
import CompleteCheck from '../completeCheck/page';
import { ArrowLeftSquare } from 'lucide-react';
import Link from 'next/link';


function Files() {   // Removed unnecessary `uploadBtnClickHandler` from props
   const [progress, setProgress] = useState(0); 
   const router = useRouter(); 
   const { user } = useUser(); 
   const [fileId, setFileId] = useState(); 
   const [uploadCompleted, setUploadCompleted] = useState(false); // Default to false

   // Initialize Firebase services
   const storage = getStorage(app);
   const db = getFirestore(app);

   // File upload function
   const uploadFile = (file) => {
      const metadata = { contentType: file.type };
      const storageRef = ref(storage, 'fileSharingApp/' + file?.name);
      const uploadTask = uploadBytesResumable(storageRef, file, file.type);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
         (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done'); 
            setProgress(progress);
            
            // When upload completes, get the file URL and save the file info
            if (progress === 100) {
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log('File available at', downloadURL);
                  saveFileInfo(file, downloadURL);
                  setUploadCompleted(true);  // *** Updated: Mark upload as completed
               });
            }
         },
         (error) => {
            console.error("Upload error:", error);  // Handle errors here
         }
      );
   };

   // Save uploaded file information in Firestore
   const saveFileInfo = async (file, fileUrl) => {
      const docId = generateRandomString().toString();
      await setDoc(doc(db, "uploadedFile", docId), {
         fileName: file?.name,
         fileSize: file?.size,
         fileType: file?.type,
         fileUrl: fileUrl,
         userEmail: user?.primaryEmailAddress.emailAddress,
         userName: user?.fullName,
         password: "",
         fileId: docId,
         shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
      });

      setFileId(docId);  // Set file ID for later use
   };

   // Redirect to file preview when the upload completes
   useEffect(() => {
      if (uploadCompleted) {  // *** Updated: Directly check the uploadCompleted flag
         setTimeout(() => {
            router.push('/file-preview/' + fileId);
         }, 2000);  // Redirect after 2 seconds
      }
   }, [uploadCompleted, fileId]);  // *** Updated: Proper dependency array

   return ( 
    <div>
      <Link href="/" 
      className="text-primary
      flex items-center gap-3 hover:text-blue-700"
      >
        <ArrowLeftSquare/>
      Go To Home</Link>
    
      <div className="p-5 px-8 md:px-28 text-center"> 
         {!uploadCompleted ? (  // Show upload form if upload isn't complete
            <div>
               <h1 className="text-[20px] text-center m-5">
                  <strong className="text-primary">Uploading</strong> File and 
                  <strong className="text-primary">Share</strong> it
               </h1>
               <UploadForm 
                  // *** Updated: Prevent function invocation on render
                  uploadBtnClickHandler={(file) => uploadFile(file)}  
                  progress={progress}
               />
            </div>
         ) : (
            <CompleteCheck />  // Show completion component when upload is done
         )}
      </div> 
       </div>
   );
}

export default Files;
