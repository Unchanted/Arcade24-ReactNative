import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="flex flex-col items-center justify-end min-h-screen pb-10 space-y-4 px-4">
          <Link to="/signup" className="w-full max-w-xs">
            <button
              className="bg-green-500 text-white font-bold py-2 w-full rounded-full"
              style={{ borderRadius: '81px' }}
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login" className="w-full max-w-xs">
            <button
              className="border border-white text-white font-bold py-2 w-full rounded-full bg-transparent"
              style={{ borderRadius: '81px' }}
            >
              Log In
            </button>
          </Link>
          <button
            className="border border-white text-white font-bold py-2 w-full rounded-full bg-transparent"
            style={{ borderRadius: '81px' }}
          >
            Continue with Google
          </button>
          <button
            className="border border-white text-white font-bold py-2 w-full rounded-full bg-transparent"
            style={{ borderRadius: '81px' }}
          >
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
