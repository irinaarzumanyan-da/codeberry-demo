import React from 'react';
import Image from 'next/image';
import { Photo } from '../lib/types';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="relative group">
          <Image
            src={photo.url}
            alt={photo.description}
            width={300}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <div className="text-white space-x-4">
              <button className="hover:text-primary"><Heart size={24} /></button>
              <button className="hover:text-primary"><MessageCircle size={24} /></button>
              <button className="hover:text-primary"><Share2 size={24} /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;