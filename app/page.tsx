import React from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import UploadButton from '../components/UploadButton';
import PhotoGrid from '../components/PhotoGrid';
import SearchBar from '../components/SearchBar';
import CategoryBar from '../components/CategoryBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.hero}>
        <h1>Share Your Moments</h1>
        <UploadButton />
      </div>
      <SearchBar />
      <CategoryBar />
      <PhotoGrid />
    </main>
  );
}