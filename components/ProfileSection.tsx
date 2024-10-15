import React from 'react';
import Image from 'next/image';

const ProfileSection: React.FC = () => {
  // TODO: Replace with actual user data
  const user = {
    name: 'John Doe',
    avatar: '/default-avatar.png',
    photoCount: 42,
  };

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Image
          src={user.avatar}
          alt={user.name}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.photoCount} photos</p>
        </div>
      </div>
      <button className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary-dark transition-colors duration-300">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileSection;