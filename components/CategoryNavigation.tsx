import React from 'react';
import styles from './CategoryNavigation.module.css';

const categories = ['Nature', 'Travel', 'Family', 'Food', 'Architecture'];

const CategoryNavigation: React.FC = () => {
  return (
    <nav className={styles.categoryNav}>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <a href={`#${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavigation;