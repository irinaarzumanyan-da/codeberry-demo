import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`focus:outline-none ${liked ? 'text-red-500' : 'text-white'}`}
    >
      <Heart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
    </button>
  );
};

export default LikeButton;