import React from 'react';
import styles from './Header.module.css';
import { Camera } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Camera size={24} />
        <h1>PhotoShare</h1>
      </div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">About</a>
      </nav>
      <button className={styles.uploadButton}>Upload</button>
    </header>
  );
};

export default Header;