import React from 'react'

function ProgressBar({progress=50}) {
  return (
    <div className="w-full bg-gray-400  mt-3
     text-white  rounded-full">  

     <div className=" bg-primary py-0.2
       rounded-full " 
       style={{width: `${progress}%`}}> 
        {`${Number(progress).toFixed(0)}%`}    
      </div> 
     

    </div>
  )
}

export default ProgressBar