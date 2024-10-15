import React, { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Nature', 'Travel', 'Family', 'Food', 'Art', 'Technology'];

const CategoryNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <nav className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold mb-2">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <Link href={`/category/${category.toLowerCase()}`}>
              <span
                className={`block py-2 px-4 rounded ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;