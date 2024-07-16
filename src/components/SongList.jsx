import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Importing FontAwesome play icon

const SongList = () => {
  // Example data, replace with actual data
  const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', imageUrl: 'path-to-image.jpg' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', imageUrl: 'path-to-image.jpg' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', imageUrl: 'path-to-image.jpg' },
    // Add more songs as needed
  ];

  return (
    <div className="flex flex-col space-y-4 overflow-x-scroll">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center bg-gray-700 p-4 rounded-lg w-60 h-20">
          <img
            src={song.imageUrl}
            alt={`${song.title} Cover`}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-lg truncate">{song.title}</h3>
            <p className="text-gray-400 truncate">{song.artist}</p>
          </div>
          <button className="ml-auto text-green-500 hover:text-green-400">
            <FaPlay size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SongList;
