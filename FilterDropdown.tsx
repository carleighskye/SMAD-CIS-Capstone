import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  onFilterChange: (filters: FilterState) => void;
  onClose: () => void;
  totalTours: number;
}

export interface FilterState {
  destinations: string[];
  categories: string[];
  durations: string[];
  priceRange: { min: number; max: number };
  difficulty: string[];
  groupSize: string[];
  season: string[];
  wildlife: string[];
  accommodation: string[];
  language: string[];
  travelType: string[];
  specialInterest: string[];
}

const initialFilters: FilterState = {
  destinations: [],
  categories: [],
  durations: [],
  priceRange: { min: 500, max: 5000 },
  difficulty: [],
  groupSize: [],
  season: [],
  wildlife: [],
  accommodation: [],
  language: [],
  travelType: [],
  specialInterest: [],
};

export default function FilterDropdown({ onFilterChange, onClose, totalTours }: FilterDropdownProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [expandedSections, setExpandedSections] = useState<string[]>(['destinations', 'categories', 'durations']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => {
      const current = prev[category];
      if (Array.isArray(current)) {
        return {
          ...prev,
          [category]: current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value],
        };
      }
      return prev;
    });
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { ...prev.priceRange, [type]: value },
    }));
  };

  const clearAll = () => {
    setFilters(initialFilters);
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const countActiveFilters = () => {
    let count = 0;
    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'priceRange') {
        if (value.min !== 500 || value.max !== 5000) count++;
      } else if (Array.isArray(value) && value.length > 0) {
        count += value.length;
      }
    });
    return count;
  };

  const FilterSection = ({ title, options, category }: { title: string; options: string[]; category: keyof FilterState }) => {
    const isExpanded = expandedSections.includes(category);
    const selectedValues = filters[category] as string[];

    return (
      <div className="border-b border-gray-200 py-3">
        <button
          onClick={() => toggleSection(category)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] text-[#181e4b]">
            {title}
            {selectedValues.length > 0 && (
              <span className="ml-2 text-[12px] bg-[#DF6951] text-white px-2 py-0.5 rounded-full">
                {selectedValues.length}
              </span>
            )}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
        {isExpanded && (
          <div className="mt-3 space-y-2 max-h-[200px] overflow-y-auto">
            {options.map(option => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded"
              >
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option)}
                  onChange={() => toggleFilter(category, option)}
                  className="w-4 h-4 text-[#DF6951] border-gray-300 rounded focus:ring-[#DF6951]"
                />
                <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-gray-700">
                  {option}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[100px]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

      {/* Filter Panel */}
      <div className="relative bg-white rounded-[24px] w-[90vw] max-w-[900px] max-h-[80vh] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#97756e] to-[#786057] px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="font-['Volkhov:Bold',sans-serif] text-[24px] text-white">
              Filter Tours
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-white/90 mt-1">
              Showing {totalTours} tours {countActiveFilters() > 0 && `· ${countActiveFilters()} filters active`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(80vh-180px)] px-6 py-4">
          <div className="grid grid-cols-2 gap-x-8">
            {/* Left Column */}
            <div>
              <h3 className="font-['Volkhov:Bold',sans-serif] text-[18px] text-[#181e4b] mb-3">
                Core Filters
              </h3>

              <FilterSection
                title="Destination / Region"
                category="destinations"
                options={[
                  'Serengeti National Park',
                  'Ngorongoro Crater',
                  'Mount Kilimanjaro',
                  'Tarangire National Park',
                  'Zanzibar',
                  'Lake Manyara',
                  'Ruaha National Park',
                  'Selous Game Reserve',
                ]}
              />

              <FilterSection
                title="Tour Category / Type"
                category="categories"
                options={[
                  'Wildlife Safari',
                  'Luxury Safari',
                  'Camping Safari',
                  'Honeymoon Package',
                  'Family Safari',
                  'Cultural Tour',
                  'Adventure Tour',
                  'Beach Holiday',
                ]}
              />

              <FilterSection
                title="Duration"
                category="durations"
                options={['1–3 days', '4–7 days', '8–10 days', '11+ days']}
              />

              {/* Price Range */}
              <div className="border-b border-gray-200 py-3">
                <button
                  onClick={() => toggleSection('priceRange')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[15px] text-[#181e4b]">
                    Price Range (USD)
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      expandedSections.includes('priceRange') ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSections.includes('priceRange') && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <label className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-gray-600 mb-1 block">
                          Min
                        </label>
                        <input
                          type="number"
                          value={filters.priceRange.min}
                          onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[14px]"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-gray-600 mb-1 block">
                          Max
                        </label>
                        <input
                          type="number"
                          value={filters.priceRange.max}
                          onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[14px]"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="5000"
                      step="100"
                      value={filters.priceRange.max}
                      onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                      className="w-full accent-[#DF6951]"
                    />
                  </div>
                )}
              </div>

              <FilterSection
                title="Difficulty Level"
                category="difficulty"
                options={[
                  'Easy (Leisure)',
                  'Moderate (Some Hiking)',
                  'Challenging (Mountain Climbs)',
                  'Expert (Technical Climbing)',
                ]}
              />

              <FilterSection
                title="Group Size or Style"
                category="groupSize"
                options={['Private Tour', 'Small Group (2-6)', 'Medium Group (7-12)', 'Large Group (13+)']}
              />
            </div>

            {/* Right Column */}
            <div>
              <h3 className="font-['Volkhov:Bold',sans-serif] text-[18px] text-[#181e4b] mb-3">
                Additional Filters
              </h3>

              <FilterSection
                title="Season / Time of Year"
                category="season"
                options={[
                  'Dry Season (June–Oct)',
                  'Green Season (Nov–May)',
                  'Migration Season (Jan–Mar)',
                  'Calving Season (Feb)',
                ]}
              />

              <FilterSection
                title="Wildlife Focus"
                category="wildlife"
                options={[
                  'Big Five',
                  'Bird Watching',
                  'Great Migration',
                  'Primates',
                  'Marine Life',
                  'Predators',
                ]}
              />

              <FilterSection
                title="Accommodation Type"
                category="accommodation"
                options={[
                  'Luxury Lodge',
                  'Tented Camp',
                  'Luxury Resort',
                  'Budget Camping',
                  'Mid-Range Lodge',
                  'Beach Resort',
                ]}
              />

              <FilterSection
                title="Guided Language"
                category="language"
                options={['English', 'French', 'German', 'Spanish', 'Italian', 'Swahili']}
              />

              <FilterSection
                title="Travel Type"
                category="travelType"
                options={['Solo', 'Couple', 'Family', 'Group', 'Friends']}
              />

              <FilterSection
                title="Special Interest"
                category="specialInterest"
                options={[
                  'Photography',
                  'Conservation',
                  'Local Culture',
                  'Adventure',
                  'Wellness',
                  'Educational',
                ]}
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-between">
          <button
            onClick={clearAll}
            className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] text-gray-600 hover:text-[#DF6951] transition-colors"
          >
            Clear All Filters
          </button>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-[30px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                applyFilters();
                onClose();
              }}
              className="px-6 py-3 bg-[#DF6951] text-white rounded-[30px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[14px] hover:bg-[#c5543d] transition-colors shadow-lg"
            >
              Show Results ({totalTours})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
