import React from 'react';
import Image from 'next/image';
import styles from './UserProfile.module.css';

const UserProfile: React.FC = () => {
  return (
    <div className={styles.userProfile}>
      <Image src="/avatar-placeholder.png" alt="User Avatar" width={100} height={100} className={styles.avatar} />
      <h2 className={styles.username}>JohnDoe</h2>
      <p className={styles.photoCount}>Photos: 42</p>
      <button className={styles.editProfileButton}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;