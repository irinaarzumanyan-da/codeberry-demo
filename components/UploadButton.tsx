import React from 'react';
import styles from '../app/page.module.css';

const UploadButton: React.FC = () => {
  const handleUpload = () => {
    // Implement upload functionality here
    console.log('Upload button clicked');
  };

  return (
    <button className={styles.uploadButton} onClick={handleUpload}>
      Upload Photo
    </button>
  );
};

export default UploadButton;