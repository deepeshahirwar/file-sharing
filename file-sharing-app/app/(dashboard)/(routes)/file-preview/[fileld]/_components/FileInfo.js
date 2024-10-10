import React from 'react'

function FileInfo() {
  return (
    <div  className=" bg-slate-600 rounded-md p-10   
      border-2
      w-[500px] h-[500px]"> 
        <div  className="text-white border-2 w-[80%] h-[60%]">
            image
        </div> 
  
       <div>
        <h1>File Name</h1>
        <h1>File Size</h1>
       </div>

    </div>
  )
}

export default FileInfo