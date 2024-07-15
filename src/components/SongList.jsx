import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const SongList = ({ title, items, likedItems, toggleLike }) => {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/song/${id}`);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 p-4 rounded-lg w-40 flex-shrink-0 cursor-pointer relative"
          >
            <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded-lg mb-2" onClick={() => handleItemClick(item.id)} />
            <h3 className="text-lg truncate">{item.title}</h3>
            <p className="text-gray-400 truncate">{item.artist}</p>
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => toggleLike(item.id)}
            >
              {likedItems.includes(item.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
