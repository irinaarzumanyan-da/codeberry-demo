import React from 'react';
import UploadButton from './UploadButton';
import PhotoGrid from './PhotoGrid';
import SearchBar from './SearchBar';
import TagFilter from './TagFilter';
import UserProfile from './UserProfile';
import CategoryNav from './CategoryNav';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">PhotoShare</h1>
          <UploadButton />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <SearchBar />
            <TagFilter />
            <PhotoGrid />
          </div>
          <div className="md:col-span-1">
            <UserProfile />
            <CategoryNav />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;