import React from 'react';
import PhotoCard from './PhotoCard';
import styles from '../app/page.module.css';

// Mock data for photos
const mockPhotos = [
  { id: 1, url: 'https://example.com/photo1.jpg', likes: 10, comments: 5 },
  { id: 2, url: 'https://example.com/photo2.jpg', likes: 15, comments: 3 },
  { id: 3, url: 'https://example.com/photo3.jpg', likes: 8, comments: 2 },
  // Add more mock photos as needed
];

const PhotoGrid: React.FC = () => {
  return (
    <div className={styles.photoGrid}>
      {mockPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;