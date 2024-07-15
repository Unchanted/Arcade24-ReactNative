import React from 'react';
import { songs, albums, artists } from '../data/musicDB';
import SongList from './SongList';

const ProfilePage = ({ likedSongs, likedAlbums, likedArtists }) => {
  return (
    <div className="content">
      <h1 className="text-3xl mb-6">Profile</h1>
      <div className="space-y-12">
        <SongList title="Liked Songs" items={songs.filter(song => likedSongs.includes(song.id))} likedItems={likedSongs} />
        <SongList title="Liked Albums" items={albums.filter(album => likedAlbums.includes(album.id))} likedItems={likedAlbums} />
        <div>
          <h2 className="text-2xl mb-4">Liked Artists</h2>
          <div className="flex overflow-x-auto space-x-4">
            {artists.filter(artist => likedArtists.includes(artist.id)).map((artist) => (
              <div key={artist.id} className="bg-gray-700 p-4 rounded-lg w-40 flex-shrink-0">
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

export default ProfilePage;
