import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to Quick Picks page
    navigate('/quick-picks');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-3xl mb-6">Sign Up</h1>
      <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start w-full">
          <label className="text-sm font-bold mb-1" htmlFor="username">Username</label>
          <input
            className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-sm font-bold mb-1" htmlFor="password">Password</label>
          <input
            className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-green-500"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="w-full py-2 bg-green-500 text-white font-bold rounded-full mt-4 hover:bg-green-600 transition"
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
