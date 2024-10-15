import React from 'react';
import styles from '../app/page.module.css';

const categories = ['Nature', 'Travel', 'Family', 'Food', 'Animals'];

const CategoryBar: React.FC = () => {
  return (
    <div className={styles.categoryBar}>
      {categories.map((category) => (
        <button key={category} className={styles.categoryButton}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;