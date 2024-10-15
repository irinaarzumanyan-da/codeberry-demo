import React from 'react';
import Link from 'next/link';
import { Camera } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-bold text-primary">
          <Camera className="mr-2" />
          PhotoShare
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/explore" className="text-gray-600 hover:text-primary">Explore</Link></li>
            <li><Link href="/profile" className="text-gray-600 hover:text-primary">Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;