 import { File } from 'lucide-react' 
import { X } from 'lucide-react'
 import React from 'react'

function FilePreview({file, removeFile}) {
  return (
    <div className="flex  items-center mt-8
     bg-slate-600 text-white p-5 rounded-md
     gap-2 justify-between border-slate-400" >  
      
      <div className="flex items-center p-2 ">
    <File with={100} height={100}/>
    
    <div>
        <h2>{file.name} </h2>
        <h2>{file?.type}/{(file.size/1024/1024).toFixed(2)}MB</h2>
    </div> 
    </div> 
     <X className=" text-red-500 hover:text-red-700 cursor-pointer" 
     onClick={() => removeFile(file)}/>

    </div> 


  )
}

export default FilePreview