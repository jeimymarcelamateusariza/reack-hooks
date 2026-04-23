import React from 'react';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <header className="sticky top-0 z-50 bg-airbnb-white border-b border-airbnb-border_gray">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: '#ff385c' }}>
              📸
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search photos..."
                value={searchValue}
                onChange={handleSearch}
                className="w-full px-4 py-2 rounded-[32px] bg-airbnb-light_surface text-airbnb-near_black placeholder-airbnb-secondary_gray focus:outline-none focus:ring-2 focus:ring-airbnb-rausch_red"
                style={{
                  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-airbnb-secondary_gray"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex-shrink-0">
            <button
              className="px-6 py-2 bg-airbnb-rausch_red text-airbnb-white font-medium rounded-[8px] hover:bg-airbnb-deep_rausch transition-colors"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
