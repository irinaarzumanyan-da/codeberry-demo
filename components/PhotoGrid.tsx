import React from 'react';
import Image from 'next/image';
import styles from './PhotoGrid.module.css';

interface Photo {
  id: string;
  src: string;
  alt: string;
  likes: number;
  comments: number;
}

const PhotoGrid: React.FC = () => {
  const photos: Photo[] = [
    { id: '1', src: '/photo1.jpg', alt: 'Photo 1', likes: 10, comments: 2 },
    { id: '2', src: '/photo2.jpg', alt: 'Photo 2', likes: 15, comments: 3 },
    // Add more mock photos here
  ];

  return (
    <div className={styles.photoGrid}>
      {photos.map((photo) => (
        <div key={photo.id} className={styles.photoItem}>
          <Image src={photo.src} alt={photo.alt} width={300} height={300} layout="responsive" />
          <div className={styles.photoOverlay}>
            <button className={styles.likeButton}>❤ {photo.likes}</button>
            <button className={styles.commentButton}>💬 {photo.comments}</button>
            <button className={styles.shareButton}>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;