import React from 'react';
import { useParams } from 'react-router-dom';

const SongPage = () => {
  const { songId } = useParams();

  // Fetch song details using the songId
  const song = {
    id: songId,
    title: `Song Title ${songId}`,
    artist: `Artist ${songId}`,
    image: 'path-to-image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <div className="flex-1 p-4 bg-gray-800 text-white flex flex-col items-center">
      <h1 className="text-3xl mb-6">{song.title}</h1>
      <img src={song.image} alt="Album Art" className="w-64 h-64 object-cover rounded-lg mb-4" />
      <p className="mb-4 text-center">{song.description}</p>
      <div className="w-full max-w-md">
        <input type="range" className="w-full mb-4" />
        <div className="flex justify-between items-center">
          <button className="text-xl">&#9664;</button> {/* Previous Icon */}
          <button className="text-3xl">&#9654;</button> {/* Play Icon */}
          <button className="text-xl">&#9654;&#9654;</button> {/* Next Icon */}
        </div>
      </div>
    </div>
  );
};

export default SongPage;
