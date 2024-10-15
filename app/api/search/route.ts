import { NextResponse } from 'next/server';
import { Photo } from '../../../lib/types';

// TODO: Replace with actual database query
const mockPhotos: Photo[] = [
  { id: '1', url: '/mock-photo-1.jpg', description: 'A beautiful sunset', category: 'nature' },
  { id: '2', url: '/mock-photo-2.jpg', description: 'City skyline', category: 'travel' },
  { id: '3', url: '/mock-photo-3.jpg', description: 'Family picnic', category: 'family' },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  const searchResults = mockPhotos.filter(photo => 
    photo.description.toLowerCase().includes(query.toLowerCase()) ||
    photo.category.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(searchResults);
}