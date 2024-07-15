import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import QuickPicksPage from './components/QuickPicksPage';
import SongPage from './components/SongPage';
import ProfilePage from './components/ProfilePage';
import { songs, albums, artists } from './data/musicDB';

const App = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [likedAlbums, setLikedAlbums] = useState([]);
  const [likedArtists, setLikedArtists] = useState([]);

  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-20">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/quick-picks"
              element={<QuickPicksPage likedSongs={likedSongs} likedAlbums={likedAlbums} likedArtists={likedArtists} setLikedSongs={setLikedSongs} setLikedAlbums={setLikedAlbums} setLikedArtists={setLikedArtists} />}
            />
            <Route path="/profile" element={<ProfilePage likedSongs={likedSongs} likedAlbums={likedAlbums} likedArtists={likedArtists} />} />
            <Route path="/song/:songId" element={<SongPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
