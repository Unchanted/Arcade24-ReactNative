import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-gray-900 text-white w-20 flex flex-col items-center py-4 space-y-8">
      <button className="text-lg mb-4">Settings</button>
      <NavLink to="/quick-picks" className="transform rotate-90">
        Quick Picks
      </NavLink>
      <NavLink to="/albums" className="transform rotate-90">
        Albums
      </NavLink>
      <NavLink to="/artists" className="transform rotate-90">
        Artists
      </NavLink>
      <NavLink to="/playlists" className="transform rotate-90">
        Playlists
      </NavLink>
      <NavLink to="/songs" className="transform rotate-90">
        Songs
      </NavLink>
    </div>
  );
};

export default Navbar;
