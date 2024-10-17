import React from 'react';

function FileInfo({ fileInfo }) {
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

  return (
    <div
      className="bg-slate-600 rounded-md p-10 border-2 w-[500px] h-[500px]"
    >
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
      </div>
    </div>
  );
}

export default FileInfo;
