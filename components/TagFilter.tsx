import React, { useState } from 'react';

const tags = ['Nature', 'Travel', 'Family', 'Food', 'Art', 'Technology'];

const TagFilter: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className="mb-4 overflow-x-auto whitespace-nowrap">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`mr-2 px-3 py-1 rounded-full text-sm font-medium ${
            selectedTags.includes(tag)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;