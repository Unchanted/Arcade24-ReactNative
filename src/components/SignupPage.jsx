import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    navigate('/quick-picks');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <div>
          <label className="block text-sm">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2" />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2" />
        </div>
        <button type="submit" className="w-full bg-green-600 py-2 rounded-full text-white">Continue</button>
      </form>
    </div>
  );
};

export default SignupPage;
