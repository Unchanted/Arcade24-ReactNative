import React from 'react';

const SongPlayer = ({ song }) => {
  if (!song) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={song.cover} alt={song.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
        <div>
          <h3 className="text-lg">{song.title}</h3>
          <p className="text-gray-400">{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-xl">&#9664;</button> {/* Previous button */}
        <button className="text-xl">&#9654;</button> {/* Play/Pause button */}
        <button className="text-xl">&#9654;&#9654;</button> {/* Next button */}
        <input type="range" min="0" max="100" className="w-32" /> {/* Volume control */}
        <div className="flex items-center space-x-2">
          <span>0:00</span> {/* Current time */}
          <input type="range" min="0" max="100" className="w-32" /> {/* Progress bar */}
          <span>3:30</span> {/* Duration */}
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
