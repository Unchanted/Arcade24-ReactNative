import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import QuickPicksPage from './components/QuickPicksPage';
import SongPage from './components/SongPage';
import ArtistPage from './components/ArtistPage';
import AlbumsPage from './components/AlbumsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/quick-picks" element={<QuickPicksPage />} />
        <Route path="/songs" element={<SongPage />} />
        <Route path="/artists" element={<ArtistPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
