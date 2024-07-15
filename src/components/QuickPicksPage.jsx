import React from 'react';
import SongList from './SongList';

const QuickPicksPage = () => {
  const sampleSongs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', image: 'path-to-image.jpg' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', image: 'path-to-image.jpg' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', image: 'path-to-image.jpg' },
    // Add more sample songs as needed
  ];

  const sampleAlbums = [
    { id: 1, title: 'Album 1', artist: 'Artist 1', image: 'path-to-image.jpg' },
    { id: 2, title: 'Album 2', artist: 'Artist 2', image: 'path-to-image.jpg' },
    { id: 3, title: 'Album 3', artist: 'Artist 3', image: 'path-to-image.jpg' },
    // Add more sample albums as needed
  ];

  const sampleArtists = [
    { id: 1, name: 'Artist 1', image: 'path-to-image.jpg' },
    { id: 2, name: 'Artist 2', image: 'path-to-image.jpg' },
    { id: 3, name: 'Artist 3', image: 'path-to-image.jpg' },
    // Add more sample artists as needed
  ];

  return (
    <div className="content">
      <h1 className="text-3xl mb-6">Quick Picks</h1>
      <div className="space-y-12">
        <SongList title="Songs" songs={sampleSongs} />
        <SongList title="Related Albums" songs={sampleAlbums} />
        <div>
          <h2 className="text-2xl mb-4">Favorite Artists</h2>
          <div className="flex overflow-x-auto space-x-4">
            {sampleArtists.map((artist, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg w-40 flex-shrink-0">
                <img src={artist.image} alt={artist.name} className="w-full h-40 object-cover rounded-full mb-2" />
                <h3 className="text-lg truncate">{artist.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPicksPage;
