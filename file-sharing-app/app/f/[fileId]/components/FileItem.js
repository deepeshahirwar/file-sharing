import React, { useState } from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { toast } from 'sonner'; // Assuming 'sonner' is set up correctly

function FileItem({ file }) {
  const [password, setPassword] = useState('');

  const handleDownload = (e) => {
    e.preventDefault();
    
    if (checkPassword(password)) {// when password is correct
      window.open(file?.fileUrl);
    }
  };

  const checkPassword = (password) => {// check if password is correct
    if (password === file.password) {
      toast.success('File opened successfully, Now you can download', {
        className: 'sonner-toast sonner-toast-success',
      });
      return true;
    } else {
      toast.error('Incorrect password! Please try again', {
        className: 'sonner-toast sonner-toast-error',
      });
      return false;
    }
  };

  return (
    file && (
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 
      rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4">
          <h1 className="text-2xl mb-2">{file?.userName} Shared the file with you</h1>
          <p>File Name: {file?.fileName}</p>
          <p>File Size: {file?.fileSize} bytes</p>
          <p>File Type: {file?.fileType}</p>
        </div>
        <form className="space-y-6" onSubmit={handleDownload}>
          <div className="flex justify-center items-center border border-gray-300 rounded-lg">
            <ArrowDownToLine className="w-16 h-16" />
          </div>

          {file.password.length > 3 && (
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium
               text-gray-900 dark:text-white">
                Enter Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800
             focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
             rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download File
          </button>
        </form>
      </div>
    )
  );
}

export default FileItem;
