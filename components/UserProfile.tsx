import React from 'react';
import styles from './UserProfile.module.css';
import { User } from 'lucide-react';

interface UserProfileProps {
  username: string;
  photoCount: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, photoCount }) => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.avatar}>
        <User size={48} />
      </div>
      <div className={styles.info}>
        <h2>{username}</h2>
        <p>{photoCount} photos</p>
      </div>
    </div>
  );
};

export default UserProfile;