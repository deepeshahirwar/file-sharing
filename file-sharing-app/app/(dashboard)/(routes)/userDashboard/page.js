"use client";
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import app from './../../../_utils/filrebaseConfig';
import { useUser } from '@clerk/nextjs'; // Assuming you're using Clerk for authentication
import { Copy, Trash2, Eye } from 'lucide-react'; 
import Link from 'next/link'; 
import { toast } from 'sonner'; 
import FileViewModal from '../files/_components/FileViewModal'; // Import FileViewModal

function UserDashboard() {
  const db = getFirestore(app);
  const [userFiles, setUserFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser(); // Get the logged-in user using useUser 
  const [selectedFileUrl, setSelectedFileUrl] = useState(null); // State for the selected file URL

  

  useEffect(() => {
    console.log("Current user:", user); // Log the user object
    if (user) {
      fetchUserFiles(); // Fetch files when the user is logged in
    } else {
      setLoading(false);
      console.log("No user is logged in");
    }
  }, [user]);

  const fetchUserFiles = async () => {
    try {
      const filesCollection = collection(db, 'uploadedFile');
      const userFilesQuery = query(filesCollection, where('userEmail', '==', user.primaryEmailAddress.emailAddress)); // Use the correct email field from Clerk's user object
      const filesSnapshot = await getDocs(userFilesQuery);
      if (!filesSnapshot.empty) {
        const filesList = filesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserFiles(filesList);
        console.log("Files fetched successfully:", filesList); // Debugging log
      } else {
        console.log("No files found for this user.");
      }
    } catch (error) {
      console.error("Error fetching user files:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (fileId) => {
    try {
      const fileRef = doc(db, 'uploadedFile', fileId);
      await deleteDoc(fileRef); // Delete the file from Firestore
      setUserFiles(userFiles.filter(file => file.id !== fileId)); // Update the state to remove the deleted file
      console.log(`File with ID ${fileId} deleted successfully.`); 
      toast.success('file deleted successfully', { className: 'sonner-toast sonner-toast-success' });
    } catch (error) {
      console.error("Error deleting file:", error); // Handle any errors
    }
  }; 
 
  const CopyToast = () => {
    toast.success('file Url copied successfully', { className: 'sonner-toast sonner-toast-success' });
  };


  if (loading) {
    return <div className="p-5 text-center text-primary text-3xl">Loading your files...</div>;
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

      <h1 className="text-2xl font-bold text-black mb-6">Your Uploaded Files</h1>

      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-black">4GB</h2>
          <p className="text-gray-500">Usage</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-black">6GB</h2>
          <p className="text-gray-500">Free Space</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-black">{userFiles.length} Files</h2>
          <p className="text-gray-500">Uploaded Files</p>
        </div>
      </div> 

      <h1 className="text-2xl font-bold text-black mb-6">Your Recent Uploaded Files</h1>


      {/* User's Uploaded Files Table */}
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
            {userFiles.length > 0 ? (
              userFiles.map((file) => (
                <tr key={file.id} className="border-b">
                  <td className="py-2 px-4 text-gray-800 ">{file.fileName}</td>
                  <td className="py-2 px-4 text-gray-800">
                  {(file.fileSize / (1024 * 1024)).toFixed(2)} MB
                    </td>
                  <td className="py-2 px-4 text-gray-800 ">{file.fileType}</td>
                  <td className="py-2 px-4 flex justify-center gap-2">
                    {/* Copy Link */}
                    <button
                      onClick={() => navigator.clipboard.writeText(file.fileUrl) && CopyToast()}
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

                    {/* Delete File */}
                    {/* <button
                      onClick={() => handleDelete(file.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No files found for this user.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDashboard;
