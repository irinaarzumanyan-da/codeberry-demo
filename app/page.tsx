'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import PhotoGrid from '../components/PhotoGrid';
import UploadButton from '../components/UploadButton';
import SearchBar from '../components/SearchBar';
import CategoryNav from '../components/CategoryNav';
import ProfileSection from '../components/ProfileSection';
import { Photo } from '../lib/types';

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchPhotos();
  }, [searchTerm, category]);

  const fetchPhotos = async () => {
    const response = await fetch(`/api/photos?search=${searchTerm}&category=${category}`);
    const data = await response.json();
    setPhotos(data);
  };

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.leftSidebar}>
          <ProfileSection />
          <CategoryNav onCategoryChange={setCategory} />
        </div>
        <div className={styles.centerContent}>
          <SearchBar onSearch={setSearchTerm} />
          <UploadButton onUploadSuccess={fetchPhotos} />
          <PhotoGrid photos={photos} />
        </div>
      </div>
    </main>
  );
}