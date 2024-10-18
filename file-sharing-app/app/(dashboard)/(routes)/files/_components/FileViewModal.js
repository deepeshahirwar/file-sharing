import React from 'react';

function FileViewModal({ fileUrl, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10  flex justify-center items-center">
      <div className="relative w-full h-full">
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2 z-10"
          onClick={onClose}
        >
          X
        </button>

        {/* Image Display */}
        <img
          src={fileUrl}
          alt="file preview"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default FileViewModal;
