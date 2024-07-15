import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickPicksPage = () => {
  const navigate = useNavigate();

  const handleSongClick = () => {
    navigate('/song');
  };

  return (
    <div className="flex-1 p-4 bg-gray-800 text-white">
      <h1 className="text-3xl mb-6">Quick Picks</h1>
      <div className="space-y-12">
        {/* Songs Section */}
        <div>
          <h2 className="text-2xl mb-4">Songs</h2>
          <div className="flex flex-col space-y-4 overflow-x-scroll">
            {/* Example rows of songs, replace with your actual data */}
            {Array(3).fill(0).map((_, rowIndex) => (
              <div key={rowIndex} className="flex space-x-4">
                {Array(10).fill(0).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg w-60 h-20 flex flex-col justify-center cursor-pointer"
                    onClick={handleSongClick}
                  >
                    <img src="path-to-image.jpg" alt="Song Cover" className="w-full h-full object-cover rounded-lg mb-2" />
                    <h3 className="text-lg truncate">Song Title {index + 1}</h3>
                    <p className="text-gray-400 truncate">Artist Name</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Related Albums Section */}
        <div>
          <h2 className="text-2xl mb-4">Related Albums</h2>
          <div className="flex overflow-x-scroll space-x-4">
            {/* Example albums, replace with your actual data */}
            {Array(5).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg w-60">
                <img src="path-to-image.jpg" alt="Album Cover" className="w-full h-40 object-cover rounded-lg mb-2" />
                <h3 className="text-lg">Album Title {index + 1}</h3>
                <p className="text-gray-400">Artist Name</p>
              </div>
            ))}
          </div>
        </div>
        {/* Favorite Artists Section */}
        <div>
          <h2 className="text-2xl mb-4">Favorite Artists</h2>
          <div className="flex overflow-x-scroll space-x-4">
            {/* Example artists, replace with your actual data */}
            {Array(5).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg w-40">
                <img src="path-to-image.jpg" alt="Artist" className="w-full h-40 object-cover rounded-full mb-2" />
                <h3 className="text-lg">Artist Name {index + 1}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPicksPage;
