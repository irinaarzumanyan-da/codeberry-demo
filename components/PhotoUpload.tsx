import React, { useState } from 'react';
import styles from './PhotoUpload.module.css';
import { Upload } from 'lucide-react';

const PhotoUpload: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  return (
    <div
      className={`${styles.uploadArea} ${isDragging ? styles.dragging : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload size={48} />
      <p>Drag and drop your photos here, or click to select files</p>
      <input type="file" accept="image/*" multiple className={styles.fileInput} />
    </div>
  );
};

export default PhotoUpload;