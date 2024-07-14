
import React from 'react';

const QuickPicksPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-4 py-6">
      <h1 className="text-3xl mb-6">Quick Picks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {/* Example items, you can replace these with your actual data */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <img src="path-to-image.jpg" alt="Music Cover" className="w-full h-40 object-cover rounded-lg" />
          <h2 className="mt-2 text-xl">Song Title</h2>
          <p className="text-gray-400">Artist Name</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <img src="path-to-image.jpg" alt="Music Cover" className="w-full h-40 object-cover rounded-lg" />
          <h2 className="mt-2 text-xl">Song Title</h2>
          <p className="text-gray-400">Artist Name</p>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default QuickPicksPage;
