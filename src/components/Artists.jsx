
import React from 'react';

const Artists = () => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Favorite Artists</h2>
      <div className="flex overflow-x-auto space-x-4">
        {Array(5).fill(0).map((_, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg w-40">
            <img src="path-to-image.jpg" alt="Artist" className="w-full h-40 object-cover rounded-full mb-2" />
            <h3 className="text-lg">Artist Name {index + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
