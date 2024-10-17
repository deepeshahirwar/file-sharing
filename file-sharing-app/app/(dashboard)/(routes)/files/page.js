"use client";
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import app from './../../../_utils/filrebaseConfig';
import PasswordModal from './_components/PasswordModal'; // Import the PasswordModal component
import Link from 'next/link';
import { ArrowLeftSquare } from 'lucide-react';

function Upload() {
  const db = getFirestore(app);
  const [files, setFiles] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(true); // Initially show the modal

  useEffect(() => {
    if (isAuthorized) {
      fetchFiles(); // Fetch files if the user is authorized
    }
  }, [isAuthorized]);

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
    setIsAuthorized(true); // Grant access after correct password
    setShowPasswordModal(false); // Hide modal after successful submission
  };

  const handleCloseModal = () => {
    setShowPasswordModal(false); // Close the modal when the X icon is clicked
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {showPasswordModal && (
        <PasswordModal onPasswordSubmit={handlePasswordSubmit} onClose={handleCloseModal} />
      )}

      {!showPasswordModal && isAuthorized && (
        <>
          <Link
            className="text-blue-500 hover:text-blue-600 transition duration-300 flex items-center gap-2"
            href="/upload"
          >
            <ArrowLeftSquare className="text-3xl text-blue-500 hover:text-blue-600 transition duration-300" />
            Go to Upload
          </Link>
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">Uploaded Files</h1>

          {files.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md p-5"
                >
                  <h2 className="text-xl font-semibold mb-3 text-black">
                    File Name: {file.fileName}
                  </h2>
                  <p className="text-gray-600">File Size: {file.fileSize} bytes</p>
                  <p className="text-gray-600">File Type: {file.fileType}</p>

                  <div className="flex justify-between mt-4">
                    {/* View File */}
                    <Link
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                      href={`/file-preview/${file.id}`}
                    >
                      View File
                    </Link>

                    {/* Delete File */}
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Delete File
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No files found.</p>
          )}
        </>
      )}
    </div>
  );
}

export default Upload;
