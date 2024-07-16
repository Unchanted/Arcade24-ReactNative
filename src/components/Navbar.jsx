import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItemClass = "transform -rotate-90 origin-top hover:text-green-500";

  return (
    <div className="fixed top-0 left-0 h-full w-20 bg-gray-900 text-white flex flex-col items-center py-4">
      <Link to="/settings" className="mb-4">
        <button className="text-xl">&#9881;</button> {/* Settings Icon */}
      </Link>
      <nav className="flex flex-col space-y-4 mt-6">
        <Link to="/quick-picks" className={navItemClass}>Quick Picks</Link>
        <Link to="/albums" className={navItemClass}>Albums</Link>
        <Link to="/artists" className={navItemClass}>Artists</Link>
        <Link to="/playlists" className={navItemClass}>Playlists</Link>
        <Link to="/songs" className={navItemClass}>Songs</Link>
      </nav>
    </div>
  );
};

export default Navbar;
