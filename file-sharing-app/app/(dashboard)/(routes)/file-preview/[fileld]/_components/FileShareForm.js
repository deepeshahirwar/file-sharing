"use client";
import React, { useState } from 'react';
import { Copy, Eye, EyeOff, CheckCircle } from 'lucide-react'; 
import GlobalApi from './../../../../../_utils/GlobalApi'; 
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';
function FileShareForm({ file, onPasswordSave }) {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [password, setPassword] = useState(''); // State to store password input 
  const [email, setEmail] = useState(''); 
  
  const [url, setUrl] = useState('');
  const { user } = useUser();

  // Email validation function
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = () => {
    // Validate email before proceeding
    if (!email || !validateEmail(email)) {
      console.error("Invalid email address"); 
      toast.error('Invalid email address.', { className: 'sonner-toast sonner-toast-error' });
      return;
    }

    const data = {
      emailToSend: email,
      userName: user?.fullName || "Unknown",  // Provide fallback if user is not available
      fileSize: file?.fileSize||"Unknown",
      fileName: file?.fileName||"Unknown",
      shortUrl: file?.shortUrl||"#",
      fileType: file?.fileType || "Unknown",
    };

    console.log("Sending data:", data);  // Log the data to inspect the request payload

    GlobalApi.SendEmail(data)
      .then((res) => {
        console.log("Email sent successfully:", res);
        toast.success('Email sent successfully!', { className: 'sonner-toast sonner-toast-success' });
      })
      .catch((error) => {
        console.error("Error sending email:", error);  // Catch any errors from the request
        toast.error('Error sending email.', { className: 'sonner-toast sonner-toast-error' });
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="grid gap-3">
      {/* Short URL section */}
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="LastName" className="block text-sm font-medium text-white">
          ShortUrl
        </label>

        <input
          placeholder="https://mydomain.com"
          type="text"
          id="LastName"
          name="last_name" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
        />
        <Copy className="text-white text-3xl cursor-pointer hover:text-primary" />
      </div>

      {/* Password section */}
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="Password" className="block text-sm font-medium text-white">
          Password
        </label>

        <div className="relative mt-1 w-full">
          <input
            placeholder="Enter your password"
            type={passwordVisible ? 'text' : 'password'}
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
            {passwordVisible ? <EyeOff /> : <Eye />} {/* Show appropriate icon */}
          </button>
        </div>

        <button
          onClick={() => onPasswordSave(password)}
          className="mt-3 bg-primary p-3 rounded-md text-white"
        >
          Save
        </button>
      </div>

      {/* Email section */}
      <div className="col-span-6">
        <label htmlFor="Email" className="block text-sm font-medium text-white">
          Email
        </label>

        <input
          placeholder="Enter your email"
          type="email"
          id="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
        />
      </div>

      {/* Send File button */}
      <button
        onClick={sendEmail}
        className="bg-primary p-3 rounded-md text-white"
      >
        Send File
      </button>
    </div>
  );
}

export default FileShareForm;
