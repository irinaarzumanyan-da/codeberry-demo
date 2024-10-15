import React from 'react';

interface CategoryNavProps {
  onCategoryChange: (category: string) => void;
}

const categories = ['All', 'Nature', 'Travel', 'Family', 'Food', 'Art'];

const CategoryNav: React.FC<CategoryNavProps> = ({ onCategoryChange }) => {
  return (
    <nav className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category.toLowerCase())}
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;