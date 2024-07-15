import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-20 bg-gray-900 text-white flex flex-col items-center py-4">
      <NavLink to="/settings" className="mb-4">
        <button className="text-xl">&#9881;</button> {/* Settings Icon */}
      </NavLink>
      <nav className="flex flex-col space-y-4 mt-6">
        <NavLink to="/quick-picks" className="hover:text-green-500" activeClassName="text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Quick Picks</NavLink>
        <NavLink to="/albums" className="hover:text-green-500" activeClassName="text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Albums</NavLink>
        <NavLink to="/artists" className="hover:text-green-500" activeClassName="text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Artists</NavLink>
        <NavLink to="/playlists" className="hover:text-green-500" activeClassName="text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Playlists</NavLink>
        <NavLink to="/songs" className="hover:text-green-500" activeClassName="text-green-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Songs</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
