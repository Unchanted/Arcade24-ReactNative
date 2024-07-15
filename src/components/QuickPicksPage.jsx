import React, { useState } from 'react';
import { songs, albums, artists } from '../data/musicDB';
import SongList from './SongList';

const QuickPicksPage = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [likedAlbums, setLikedAlbums] = useState([]);
  const [likedArtists, setLikedArtists] = useState([]);

  const toggleLike = (id, type) => {
    const setLiked = (likedState, setLikedState) => {
      setLikedState((prevLiked) =>
        prevLiked.includes(id) ? prevLiked.filter((item) => item !== id) : [...prevLiked, id]
      );
    };

    if (type === 'song') setLiked(likedSongs, setLikedSongs);
    if (type === 'album') setLiked(likedAlbums, setLikedAlbums);
    if (type === 'artist') setLiked(likedArtists, setLikedArtists);
  };

  return (
    <div className="content">
      <h1 className="text-3xl mb-6">Quick Picks</h1>
      <div className="space-y-12">
        <SongList title="Songs" items={songs} likedItems={likedSongs} toggleLike={(id) => toggleLike(id, 'song')} />
        <SongList title="Related Albums" items={albums} likedItems={likedAlbums} toggleLike={(id) => toggleLike(id, 'album')} />
        <div>
          <h2 className="text-2xl mb-4">Favorite Artists</h2>
          <div className="flex overflow-x-auto space-x-4">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-gray-700 p-4 rounded-lg w-40 flex-shrink-0 relative">
                <img src={artist.image} alt={artist.name} className="w-full h-40 object-cover rounded-full mb-2" />
                <h3 className="text-lg truncate">{artist.name}</h3>
                <button
                  className="absolute top-2 right-2 text-xl"
                  onClick={() => toggleLike(artist.id, 'artist')}
                >
                  {likedArtists.includes(artist.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPicksPage;
