import React from 'react';
import Image from 'next/image';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';
import ShareButton from './ShareButton';

interface Photo {
  id: string;
  src: string;
  alt: string;
}

const mockPhotos: Photo[] = [
  { id: '1', src: '/images/photo1.jpg', alt: 'Photo 1' },
  { id: '2', src: '/images/photo2.jpg', alt: 'Photo 2' },
  { id: '3', src: '/images/photo3.jpg', alt: 'Photo 3' },
  // Add more mock photos as needed
];

const PhotoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {mockPhotos.map((photo) => (
        <div key={photo.id} className="relative group">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={300}
            height={300}
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between items-center">
              <LikeButton />
              <CommentSection />
              <ShareButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;