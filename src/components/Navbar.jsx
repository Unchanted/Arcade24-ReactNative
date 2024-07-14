import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-20 bg-gray-900 text-white flex flex-col items-center py-4">
      <Link to="/settings" className="mb-4">
        <button className="text-xl">&#9881;</button> {/* Settings Icon */}
      </Link>
      <nav className="flex flex-col space-y-4 mt-6">
        <Link to="/quick-picks" className="hover:text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Quick Picks</Link>
        <Link to="/albums" className="hover:text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Albums</Link>
        <Link to="/artists" className="hover:text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Artists</Link>
        <Link to="/playlists" className="hover:text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Playlists</Link>
        <Link to="/songs" className="hover:text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Songs</Link>
      </nav>
    </div>
  );
};

export default Navbar;
