import React from 'react';

const SongPage = () => {
  return (
    <div className="p-4 bg-gray-800 text-white">
      <h1 className="text-3xl mb-6">Songs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(20).fill(0).map((_, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <img src="path-to-image.jpg" alt="Song Cover" className="w-full h-40 object-cover rounded-lg mb-2" />
            <h3 className="text-lg truncate">Song Title {index + 1}</h3>
            <p className="text-gray-400 truncate">Artist Name</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongPage;
