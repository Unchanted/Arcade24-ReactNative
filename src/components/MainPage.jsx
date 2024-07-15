import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <Link to="/signup" className="bg-green-600 text-white py-2 px-4 rounded-full w-64 text-center">Sign Up</Link>
        <Link to="/login" className="border border-white text-white py-2 px-4 rounded-full w-64 text-center">Log In</Link>
        <button className="border border-white text-white py-2 px-4 rounded-full w-64 text-center">Continue with Google</button>
        <button className="border border-white text-white py-2 px-4 rounded-full w-64 text-center">Continue with Apple</button>
      </div>
    </div>
  );
};

export default MainPage;
