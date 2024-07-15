import React from 'react';

const Songs = ({ onSongClick }) => {
  const songs = Array(10).fill(0).map((_, index) => ({
    title: `Song Title ${index + 1}`,
    artist: 'Artist Name',
    cover: 'path-to-image.jpg', // Replace with actual path to image
  }));

  return (
    <div>
      <h2 className="text-2xl mb-4">Songs</h2>
      <div className="flex overflow-x-auto space-x-4">
        {songs.map((song, index) => (
          <div 
            key={index} 
            className="bg-gray-700 p-4 rounded-lg w-60 h-20 flex flex-col justify-center cursor-pointer"
            onClick={() => onSongClick(song)}
          >
            <img src={song.cover} alt={song.title} className="w-full h-full object-cover rounded-lg mb-2" />
            <h3 className="text-lg truncate">{song.title}</h3>
            <p className="text-gray-400 truncate">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
