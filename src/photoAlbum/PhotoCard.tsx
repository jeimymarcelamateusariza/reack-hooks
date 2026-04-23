import React from 'react';

interface PhotoCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  onLike?: (id: string) => void;
  isLiked?: boolean;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  id,
  image,
  title,
  description,
  onLike,
  isLiked = false,
}) => {
  return (
    <div
      className="bg-airbnb-white rounded-[20px] overflow-hidden transition-transform hover:scale-105 duration-300"
      style={{
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-airbnb-light_surface">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Heart Button */}
        <button
          onClick={() => onLike?.(id)}
          className="absolute top-3 right-3 bg-airbnb-white rounded-full p-2 shadow-airbnb_hover hover:shadow-airbnb_card transition-shadow"
        >
          <svg
            className={`w-6 h-6 ${isLiked ? 'fill-airbnb-rausch_red text-airbnb-rausch_red' : 'text-airbnb-near_black'}`}
            fill={isLiked ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="text-lg font-semibold mb-1 line-clamp-2"
          style={{
            color: '#222222',
            letterSpacing: '-0.44px',
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm mb-4 line-clamp-2"
          style={{
            color: '#6a6a6a',
          }}
        >
          {description}
        </p>

        {/* CTA Button */}
        <button className="w-full bg-airbnb-near_black text-airbnb-white py-2 rounded-[8px] font-medium text-sm hover:bg-airbnb-focused_gray transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};
