"use client";
import React, { useState } from 'react'; 
import FileViewModal from '../../../files/_components/FileViewModal'; // Import FileViewModal 
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'; // Make sure to import getFirestore
import Link from 'next/link';
import { Trash2, Eye } from 'lucide-react'; 
import { useRouter } from 'next/navigation'; // Import useRouter for redirection
import { toast } from 'sonner';
import app from './../../../../../_utils/filrebaseConfig'; // Import Firebase config

function FileInfo({ fileInfo, userFiles, setUserFiles }) {
  const [selectedFileUrl, setSelectedFileUrl] = useState(null); // State for the selected file URL
  const router = useRouter(); // Initialize router for redirection
  const db = getFirestore(app); // Firestore instance

  // Check if fileInfo is available before rendering
  if (!fileInfo) {
    return <div className="text-white">Loading file details...</div>;
  }

  // Format file size from bytes to a more readable format (e.g., KB, MB)
  const formatFileSize = (size) => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
      (size / Math.pow(1024, i)).toFixed(2) * 1 +
      ' ' +
      ['B', 'KB', 'MB', 'GB', 'TB'][i]
    );
  };

  const handleDelete = async (fileId) => {
    try {
      const fileRef = doc(db, 'uploadedFile', fileId);
      await deleteDoc(fileRef); // Delete the file from Firestore
      setUserFiles(userFiles.filter(file => file.id !== fileId)); // Update the state to remove the deleted file
      toast.success('File deleted successfully', { className: 'sonner-toast sonner-toast-success' });

      // Redirect user to the upload page after deletion
      router.push('/upload');
    } catch (error) {
      console.error("Error deleting file:", error); // Handle any errors
      toast.error('Failed to delete the file', { className: 'sonner-toast sonner-toast-error' });
    }
  };

  const handleViewFile = (fileUrl) => {
    setSelectedFileUrl(fileUrl); // Set the selected file URL to show in the modal
  };

  const handleCloseModal = () => {
    setSelectedFileUrl(null); // Close the modal
  };

  return (
    <div className="bg-slate-600 rounded-md p-10 border-2 w-[500px] h-[500px]">
      {selectedFileUrl && <FileViewModal fileUrl={selectedFileUrl} onClose={handleCloseModal} />}
      
      {/* Display the image */}
      <div className="text-white border-2 w-[80%] h-[60%] flex items-center justify-center">
        {fileInfo.fileUrl ? (
          <img
            src={fileInfo.fileUrl}
            alt={fileInfo.fileName}
            className="object-contain w-full h-full"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>

      {/* Display file details */}
      <div className="mt-5">
        <h1 className="text-white">
          <strong>File Name:</strong> {fileInfo.fileName || 'Unknown'}
        </h1>
        <h1 className="text-white">
          <strong>File Size:</strong> {fileInfo.fileSize ? formatFileSize(fileInfo.fileSize) : 'Unknown'}
        </h1>
        <h1 className="text-white">
          <strong>File Type:</strong> {fileInfo.fileType || 'Unknown'}
        </h1> 

        {/* View File */}
        <button
          onClick={() => handleViewFile(fileInfo.fileUrl)} // Use fileInfo.fileUrl here
          className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <Eye className="w-4 h-4 mr-1" />
          View
        </button>

        {/* Delete File */}
        <Link
          onClick={() => handleDelete(fileInfo.id)} // Call handleDelete with the file ID 
          href="/upload"
          className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Delete
        </Link>
      </div>
    </div>
  );
}

export default FileInfo;
