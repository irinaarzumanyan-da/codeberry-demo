import React from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import PhotoGrid from '../components/PhotoGrid';
import PhotoUpload from '../components/PhotoUpload';
import SearchBar from '../components/SearchBar';
import UserProfile from '../components/UserProfile';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <UserProfile />
          <nav className={styles.categories}>
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Nature</a></li>
              <li><a href="#">Travel</a></li>
              <li><a href="#">Family</a></li>
            </ul>
          </nav>
        </aside>
        <section className={styles.photoSection}>
          <SearchBar />
          <PhotoUpload />
          <PhotoGrid />
        </section>
      </div>
    </main>
  );
}