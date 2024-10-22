import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>PhotoShare</div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#explore">Explore</a>
        <a href="#notifications">Notifications</a>
      </nav>
      <button className={styles.uploadButton}>Upload</button>
      <div className={styles.userProfile}>
        <img src="/avatar-placeholder.png" alt="User Avatar" className={styles.avatar} />
      </div>
    </header>
  );
};

export default Header;