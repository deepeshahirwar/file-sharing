import React from 'react'

function FileShareForm() {
  return (
     
        <div className="grid  gap-3"> 
          {/* short url section */} 
        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" 
            className="block text-sm font-medium text-white">
              ShortUrl
            </label>

            <input 
             placeholder="https://mydomain.com"
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 w-full   rounded-md border-gray-200
               bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
            />
          </div>

         
     {/* password section */}
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm
             font-medium text-white"> Password </label>

            <input 
              placeholder="Enter your password"
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full   rounded-md border-gray-200
               bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
            />  
             <button  className="bg-primary p-3 rounded-md text-white">
            Save
          </button>  
          </div>  

        

      {/* email section */}
          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium
             text-white"> Email </label>

            <input 
              placeholder="Enter your email"
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full   rounded-md border-gray-200
               bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
            />
         
          </div>  



          <button  className="bg-primary p-3 rounded-md text-white">
            Send File
          </button>

            
        

    </div>
  )
}

export default FileShareForm