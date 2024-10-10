import React from 'react'
import {Copy, Eye, EyeOff, CheckCircle} from 'lucide-react'; 
import { useState , useEffect} from 'react';  

function FileShareForm({file,onPasswordSave}) { 
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [password, setPassword] = useState(''); // State to store password input 
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };  

  
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
            <Copy  className="text-white text-3xl cursor-pointer hover:text-primary"/>
         
               
          </div>

         
     {/* password section */}
     <div className="col-span-6 sm:col-span-3">
      <label htmlFor="Password" className="block text-sm font-medium text-white">
        Password
      </label>

      <div className="relative mt-1 w-full">
        <input
          placeholder="Enter your password"
          type={passwordVisible ? 'text' : 'password'} // Toggle between text and password
          id="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
        /> 
        {/* Check mark if password is entered */}
        {password.length > 3 && (
          <span className="absolute inset-y-0 left-2 flex items-center text-green-500">
            <CheckCircle />
          </span>
        )}

        {/* Toggle Password Visibility Button */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-2 flex items-center text-gray-500"
        > 
        Save
          {passwordVisible ? <EyeOff /> : <Eye />} {/* Show appropriate icon */}
        </button>

        
      </div>

      <button  
      onClick={() => onPasswordSave(password)}
      className="mt-3 bg-primary p-3 rounded-md text-white">
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