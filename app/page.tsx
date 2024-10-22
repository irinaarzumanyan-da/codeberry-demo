import React from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import PhotoGrid from '../components/PhotoGrid';
import SearchBar from '../components/SearchBar';
import UserProfile from '../components/UserProfile';
import CategoryNavigation from '../components/CategoryNavigation';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <UserProfile />
          <CategoryNavigation />
        </aside>
        <section className={styles.photoSection}>
          <SearchBar />
          <PhotoGrid />
        </section>
      </div>
    </main>
  );
}