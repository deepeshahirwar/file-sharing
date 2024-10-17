"use client";
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import app from './../../../_utils/filrebaseConfig';
import Link from 'next/link';
import { Copy, Trash2, Eye } from 'lucide-react'; 
import PasswordModal from './_components/PasswordModal'; // Import PasswordModal

function Upload() {
  const db = getFirestore(app);
  const [files, setFiles] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility state

  useEffect(() => {
    if (isAuthenticated) {
      fetchFiles(); // Fetch files only if authenticated
    }
  }, [isAuthenticated]);

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
  };

  const handlePasswordSubmit = () => {
    setIsAuthenticated(true); // Grant access on correct password
    setIsModalOpen(false); // Close the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal if user cancels
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {isModalOpen && !isAuthenticated && (
        <PasswordModal 
          onPasswordSubmit={handlePasswordSubmit} 
          onClose={handleCloseModal} 
        />
      )}
      
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
                  <td className="py-2 px-4 text-gray-800 ">{file.fileSize} bytes</td>
                  <td className="py-2 px-4 text-gray-800 ">{file.fileType}</td>
                  <td className="py-2 px-4 flex justify-center gap-2">
                    {/* Copy Link */}
                    <button
                      onClick={() => navigator.clipboard.writeText(file.fileUrl)}
                      className="bg-purple-500 text-white py-1 px-2 rounded-lg hover:bg-purple-600 transition duration-300 flex items-center"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy Link
                    </button>

                    {/* View File */}
                    <Link 
                     className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center"
                    href={`/file-preview/${file.id}`} passHref>
                     
                        <Eye className="w-4 h-4 mr-1" />
                        View
                     
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
