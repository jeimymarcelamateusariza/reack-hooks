import React from 'react';
import { PhotoCard } from './PhotoCard';

interface Photo {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface PhotoGridProps {
  photos: Photo[];
  searchQuery?: string;
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, searchQuery = '' }) => {
  const [likedPhotos, setLikedPhotos] = React.useState<Set<string>>(new Set());

  const handleLike = (id: string) => {
    const newLiked = new Set(likedPhotos);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedPhotos(newLiked);
  };

  const filteredPhotos = photos.filter(
    (photo) =>
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {filteredPhotos.length === 0 ? (
        <div className="text-center py-12">
          <p
            className="text-lg"
            style={{ color: '#6a6a6a' }}
          >
            No photos found. Try a different search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              id={photo.id}
              image={photo.image}
              title={photo.title}
              description={photo.description}
              onLike={handleLike}
              isLiked={likedPhotos.has(photo.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
