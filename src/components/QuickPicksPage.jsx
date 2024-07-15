import React, { useState } from 'react';
import Navbar from './Navbar';
import Songs from './Songs';
import Albums from './Albums';
import Artists from './Artists';
import SongPlayer from './SongPlayer';

const QuickPicksPage = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-20 p-4 bg-gray-800 text-white">
        <h1 className="text-3xl mb-6">Quick Picks</h1>
        <div className="space-y-12">
          <Songs onSongClick={handleSongClick} />
          <Albums />
          <Artists />
        </div>
      </div>
      <SongPlayer song={currentSong} />
    </div>
  );
};

export default QuickPicksPage;
