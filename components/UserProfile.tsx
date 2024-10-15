import React from 'react';
import Image from 'next/image';

const UserProfile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    avatar: '/images/avatar.jpg',
    photoCount: 42,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <Image
          src={user.avatar}
          alt={user.name}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.photoCount} photos</p>
        </div>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        View Profile
      </button>
    </div>
  );
};

export default UserProfile;