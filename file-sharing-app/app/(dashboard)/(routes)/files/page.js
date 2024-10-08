 "use client"
 import React from 'react'
import {  SignIn, UserButton} from '@clerk/nextjs'
import { Upload } from 'lucide-react'
import UploadForm from '../upload/_components/UploadForm'

function Files() {
  return ( 
    // user button for signing out
    <div className="p-5 px md:px-28"> 
      <h1 className="text-[20px] text-center m-5">
       <strong className="text-primary"> Uploading </strong> 
        File and  
       <strong className="text-primary"> Share </strong> 
        it
        </h1>
      <UploadForm />
     
    </div>
  )
}

export default Files