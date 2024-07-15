import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import QuickPicksPage from './components/QuickPicksPage';
import SongPage from './components/SongPage';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-20">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/quick-picks" element={<QuickPicksPage />} />
            <Route path="/song/:songId" element={<SongPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
