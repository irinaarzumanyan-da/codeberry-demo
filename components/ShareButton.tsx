import React from 'react';
import { Share2 } from 'lucide-react';

const ShareButton: React.FC = () => {
  const handleShare = () => {
    // Implement share functionality
    alert('Share functionality coming soon!');
  };

  return (
    <button onClick={handleShare} className="text-white focus:outline-none">
      <Share2 className="w-6 h-6" />
    </button>
  );
};

export default ShareButton;