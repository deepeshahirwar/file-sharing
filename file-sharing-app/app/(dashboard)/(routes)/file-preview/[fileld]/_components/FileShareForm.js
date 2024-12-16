"use client";
import React, { useState } from 'react';
import { Copy, Eye, EyeOff, CheckCircle } from 'lucide-react'; 
import GlobalApi from './../../../../../_utils/GlobalApi'; 
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';

function FileShareForm({ file, onPasswordSave }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useUser();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = () => {
    if (!email || !validateEmail(email)) {
      toast.error('Invalid email address.');
      return;
    }

    const data = {
      emailToSend: email,
      userName: user?.fullName || "Unknown",
      fileSize: file?.fileSize || "Unknown",
      fileName: file?.fileName || "Unknown",
      shortUrl: file?.shortUrl || "#",
      fileType: file?.fileType || "Unknown",
    }; 
    console.log(data);
    
    

    GlobalApi.SendEmail(data)
      .then(() => toast.success('Email sent successfully!'))
      .catch(() => toast.error('Error sending email.'));
  }; 

  const onCopyUrl = () => {
    navigator.clipboard.writeText(`localhost:3000/f/${file?.fileId}`);
    toast.success('File URL copied successfully',{ className: 'sonner-toast sonner-toast-success' });
  };

  return (
    <div className="grid gap-3">
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="LastName" className="block text-sm font-medium text-white">
          ShortUrl
        </label>
        <input
          type="text"
          value={`localhost:3000/f/${file?.fileId}`}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
          readOnly
        />
        <Copy  
        onClick={() => onCopyUrl()}
        className="text-white text-3xl cursor-pointer hover:text-primary" />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="Password" className="block text-sm font-medium text-white">
          Password
        </label>
        <div className="relative mt-1 w-full">
          <input 
            placeholder="Enter your password"
            id="Password"
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
          />
          {password.length > 3 && (
            <span className="absolute inset-y-0 left-2 flex items-center text-green-500">
              <CheckCircle />
            </span>
          )}
          <button onClick={() => setPasswordVisible(!passwordVisible)} className="absolute inset-y-0 right-2 flex items-center text-gray-500">
            {passwordVisible ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <button onClick={() => onPasswordSave(password)} className="mt-3 bg-primary p-3 rounded-md text-white">
          Save
        </button>
      </div>

      <div className="col-span-6">
        <label htmlFor="Email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input 
         placeholder="Enter Recipient email"
         
         id="Email"
         name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm h-8 p-1"
        />
      </div>

      <button onClick={sendEmail} className="bg-primary p-3 rounded-md text-white">
        Send File
      </button>
    </div>
  );
}

export default FileShareForm;
