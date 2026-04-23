import React from 'react';
import { Header } from './Header';
import { PhotoGrid } from './PhotoGrid';

// Sample photos - replace with real data
const SAMPLE_PHOTOS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    title: 'Mountain Adventure',
    description: 'Breathtaking view of snow-capped mountains at sunrise',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=400&fit=crop',
    title: 'Ocean Waves',
    description: 'Perfect wave captured during golden hour',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=500&h=400&fit=crop',
    title: 'Green Forest',
    description: 'Serene forest landscape with morning mist',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=400&fit=crop',
    title: 'Sunset Colors',
    description: 'Vibrant sunset painting the sky in warm colors',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1426604342505-3d55fab5cddd?w=500&h=400&fit=crop',
    title: 'Urban Photography',
    description: 'Modern architecture with geometric patterns',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1433086241715-f7200dbb12ad?w=500&h=400&fit=crop',
    title: 'Beach Paradise',
    description: 'Tropical beach with crystal clear water',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop',
    title: 'Night Sky',
    description: 'Starry night over peaceful landscape',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop',
    title: 'Desert Dunes',
    description: 'Golden sand dunes under clear sky',
  },
];

export const PhotoAlbum: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="min-h-screen bg-airbnb-white" style={{ backgroundColor: '#ffffff' }}>
      <Header onSearch={setSearchQuery} />
      <PhotoGrid photos={SAMPLE_PHOTOS} searchQuery={searchQuery} />
    </div>
  );
};
