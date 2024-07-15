import React from 'react';

const Albums = () => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Related Albums</h2>
      <div className="flex overflow-x-auto space-x-4">
        {Array(5).fill(0).map((_, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg w-60">
            <img src="path-to-image.jpg" alt="Album Cover" className="w-full h-40 object-cover rounded-lg mb-2" />
            <h3 className="text-lg">Album Title {index + 1}</h3>
            <p className="text-gray-400">Artist Name</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
