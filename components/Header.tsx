import React from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>PhotoShare</div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;