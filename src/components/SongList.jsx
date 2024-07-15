
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SongList = ({ title, songs }) => {
  const navigate = useNavigate();

  const handleSongClick = (songId) => {
    // Navigate to the song page with the specific songId
    navigate(`/song/${songId}`);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg w-40 flex-shrink-0 cursor-pointer"
            onClick={() => handleSongClick(song.id)}
          >
            <img src={song.image} alt={song.title} className="w-full h-24 object-cover rounded-lg mb-2" />
            <h3 className="text-lg truncate">{song.title}</h3>
            <p className="text-gray-400 truncate">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
