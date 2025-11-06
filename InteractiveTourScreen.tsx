import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveHeader from './InteractiveHeader';
import SectionContent from '../imports/Section-104-255';
import FilterDropdown, { FilterState } from './FilterDropdown';

export default function InteractiveTourScreen() {
  const navigate = useNavigate();
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<FilterState | null>(null);
  const totalTours = 12; // Total number of tours available

  const handleFilterChange = (filters: FilterState) => {
    setAppliedFilters(filters);
    console.log('Filters applied:', filters);
    // Here you would filter your tours based on the selected filters
  };

  return (
    <div className="w-full min-h-screen relative bg-[rgb(151,117,110)]">
      {/* Transparent Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 px-[40px] md:px-[80px] py-[20px]">
        <div className="max-w-[1440px] mx-auto">
          <InteractiveHeader transparent={true} />
        </div>
      </div>

      {/* Tour Screen Content with interactive buttons */}
      <div 
        className="relative"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Check if click was on "Book Now" or "Book  Now" button
          if (target.textContent?.includes('Book Now') || target.textContent?.includes('Book  Now')) {
            e.stopPropagation();
            navigate('/book');
            return;
          }
          
          // Check if click was on "Learn More" button
          if (target.textContent?.includes('Learn More')) {
            e.stopPropagation();
            navigate('/book');
            return;
          }

          // Check if click was on "Filter Tours" button
          if (target.textContent?.includes('Filter Tours')) {
            e.stopPropagation();
            setShowFilterDropdown(true);
            return;
          }

          // Footer navigation clicks
          if (target.textContent === 'Home') {
            e.stopPropagation();
            navigate('/');
            return;
          }
          if (target.textContent === 'Tours') {
            e.stopPropagation();
            navigate('/tours');
            return;
          }
          if (target.textContent === 'Contact') {
            e.stopPropagation();
            navigate('/contact');
            return;
          }
        }}
      >
        <SectionContent />
      </div>

      {/* Filter Dropdown Modal */}
      {showFilterDropdown && (
        <FilterDropdown 
          onFilterChange={handleFilterChange}
          onClose={() => setShowFilterDropdown(false)}
          totalTours={totalTours}
        />
      )}
    </div>
  );
}