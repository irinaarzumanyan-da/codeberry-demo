import React from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css';

interface PhotoProps {
  photo: {
    id: number;
    url: string;
    likes: number;
    comments: number;
  };
}

const PhotoCard: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <div className={styles.photoCard}>
      <Image src={photo.url} alt={`Photo ${photo.id}`} width={300} height={300} />
      <div className={styles.photoInfo}>
        <span>{photo.likes} likes</span>
        <span>{photo.comments} comments</span>
      </div>
    </div>
  );
};

export default PhotoCard;