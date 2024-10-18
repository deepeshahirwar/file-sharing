import React, { useState } from 'react';
import { User, X } from 'lucide-react';

function PasswordModal({ onPasswordSubmit, onClose }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const weakPassword = 'admin123'; // Replace with your weak password

    if (password === weakPassword) {
      onPasswordSubmit(); // Call the function to grant access
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        {/* Close Icon */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl text-center text-primary">
          <User className="inline" /> Deepesh Ahirwar
        </h2>
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Enter Password
        </h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black p-2 border border-gray-300 rounded-lg mb-4"
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordModal;
