import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-20 bg-gray-900 flex flex-col items-center py-4">
      <div className="flex-1 flex flex-col items-center space-y-8">
        <Link to="/quick-picks" className="text-gray-400 hover:text-white">Quick Picks</Link>
        <Link to="/albums" className="text-gray-400 hover:text-white">Albums</Link>
        <Link to="/artists" className="text-gray-400 hover:text-white">Artists</Link>
        <Link to="/playlists" className="text-gray-400 hover:text-white">Playlists</Link>
        <Link to="/songs" className="text-gray-400 hover:text-white">Songs</Link>
      </div>
      <div className="flex-shrink-0">
        <Link to="/settings" className="text-gray-400 hover:text-white">
          <FaCog />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
