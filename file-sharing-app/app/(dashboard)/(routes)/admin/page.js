"use client";
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import app from './../../../_utils/filrebaseConfig';
import Link from 'next/link';
import { Copy, Trash2, Eye , Share} from 'lucide-react'; 
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs'; // Import Clerk's useUser hook 
import FileViewModal from '../files/_components/FileViewModal'; // Import FileViewModal

function Upload() {
  const db = getFirestore(app);
  const [files, setFiles] = useState([]);
  const { user, isLoaded } = useUser(); // Get user from Clerk
  const [isAuthorized, setIsAuthorized] = useState(false); // State for authorization
  const [selectedFileUrl, setSelectedFileUrl] = useState(null); // State for the selected file URL

  useEffect(() => {
    if (isLoaded) {
      // Check if the user's email matches the allowed emails
      const allowedEmails = ['deepeshahirwar7024@gmail.com', 'deepeshahirwar7987@gmail.com',
        'prafful123patel@gmail.com','0111al211074hritikkumarmaurya@gmail.com'];
      if (allowedEmails.includes(user?.primaryEmailAddress?.emailAddress)) {
        setIsAuthorized(true);
        fetchFiles(); // Fetch files if the user is authorized
      }
    }
  }, [isLoaded, user]);

  const fetchFiles = async () => {
    const filesCollection = collection(db, 'uploadedFile');
    const filesSnapshot = await getDocs(filesCollection);
    const filesList = filesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setFiles(filesList);
  };

  const handleDelete = async (fileId) => {
    const fileRef = doc(db, 'uploadedFile', fileId);
    await deleteDoc(fileRef);
    setFiles(files.filter(file => file.id !== fileId)); // Update UI after delete 
    toast.success('File deleted successfully', { className: 'sonner-toast sonner-toast-success' });
  };

  const CopyFileToast = () => {
    toast.success('File URL copied successfully', { className: 'sonner-toast sonner-toast-success' });
  }

  if (!isAuthorized) {
    return <div className="p-5 bg-gray-100 min-h-screen">This page is not accessible for everyone.</div>;
  }
  const handleViewFile = (fileUrl) => {
    setSelectedFileUrl(fileUrl); // Set the selected file URL to show in the modal
  };

  const handleCloseModal = () => {
    setSelectedFileUrl(null); // Close the modal
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
         {selectedFileUrl && <FileViewModal fileUrl={selectedFileUrl} onClose={handleCloseModal} />}
         <h1 className='text-2xl font-bold text-black text-center pb-4'>Admin Dashboard</h1>
      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-black">4GB</h2>
          <p className="text-gray-500">Usage</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-black">6GB</h2>
          <p className="text-gray-500">Free Space</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-black">192 Files</h2>
          <p className="text-gray-500">Owned Files</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold  text-black">82,991</h2>
          <p className="text-gray-500">Downloads</p>
        </div>
      </div>

      {/* Uploaded Files Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">File Name</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">File Size</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">File Type</th>
              <th className="py-2 px-4 text-center text-sm font-semibold text-gray-600">File Action</th>
            </tr>
          </thead>
          <tbody>
            {files.length > 0 ? (
              files.map((file) => (
                <tr key={file.id} className="border-b">
                  <td className="py-2 px-4 text-gray-800 ">{file.fileName}</td>
                  <td className="py-2 px-4 text-gray-800 ">{(file.fileSize/(1024*1024)).toFixed(2)} MB</td>
                  <td className="py-2 px-4 text-gray-800 ">{file.fileType}</td>
                  <td className="py-2 px-4 flex justify-center gap-2">
                    {/* Copy Link */}
                    <button
                      onClick={() => navigator.clipboard.writeText(file.fileUrl) && CopyFileToast()}
                      className="bg-purple-500 text-white py-1 px-2 rounded-lg hover:bg-purple-600 transition duration-300 flex items-center"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy Link
                    </button>

                    {/* View File */}
                    <button
                      onClick={() => handleViewFile(file.fileUrl)} // Pass the file URL to the modal
                      className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>

                    <Link 
                      className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center"
                      href={`/file-preview/${file.id}`} passHref
                    >
                      <Share className="w-4 h-4 mr-1" />
                      Share
                    </Link>

                    {/* Delete File */}
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No files found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Upload;
