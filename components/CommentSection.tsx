import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const CommentSection: React.FC = () => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <button
        onClick={toggleComments}
        className="text-white focus:outline-none"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      {showComments && (
        <div className="absolute bottom-full left-0 w-full bg-white p-2 rounded shadow-md">
          {/* Add comment input and list here */}
          <p>Comments coming soon...</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;