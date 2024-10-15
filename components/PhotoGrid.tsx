import React from 'react';
import styles from './PhotoGrid.module.css';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  likes: number;
  comments: number;
}

const mockPhotos: Photo[] = [
  { id: 1, src: '/images/photo1.jpg', alt: 'Nature photo', likes: 120, comments: 15 },
  { id: 2, src: '/images/photo2.jpg', alt: 'Travel photo', likes: 85, comments: 8 },
  // Add more mock photos here
];

const PhotoGrid: React.FC = () => {
  return (
    <div className={styles.photoGrid}>
      {mockPhotos.map((photo) => (
        <div key={photo.id} className={styles.photoItem}>
          <img src={photo.src} alt={photo.alt} className={styles.photo} />
          <div className={styles.overlay}>
            <div className={styles.actions}>
              <button><Heart size={20} /> {photo.likes}</button>
              <button><MessageCircle size={20} /> {photo.comments}</button>
              <button><Share2 size={20} /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;