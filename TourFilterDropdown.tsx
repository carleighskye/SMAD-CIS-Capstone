import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';

export function TourFilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([500, 2000]);
  
  const [selectedFilters, setSelectedFilters] = useState({
    destinations: [] as string[],
    categories: [] as string[],
    durations: [] as string[],
    difficulties: [] as string[],
    groupStyles: [] as string[],
  });

  const destinations = [
    'Serengeti',
    'Ngorongoro Crater',
    'Kilimanjaro',
    'Tarangire',
    'Zanzibar'
  ];

  const categories = [
    'Wildlife Safari',
    'Luxury Safari',
    'Camping',
    'Honeymoon',
    'Family',
    'Cultural Tour'
  ];

  const durations = [
    '1–3 days',
    '4–7 days',
    '8+ days'
  ];

  const difficulties = [
    'Easy (Leisure)',
    'Moderate (Some Hiking)',
    'Challenging (Kilimanjaro Climbs)'
  ];

  const groupStyles = [
    'Private Tour',
    'Small Group',
    'Large Group'
  ];

  const toggleFilter = (category: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      destinations: [],
      categories: [],
      durations: [],
      difficulties: [],
      groupStyles: [],
    });
    setPriceRange([500, 2000]);
  };

  const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0) || 
    priceRange[0] !== 500 || priceRange[1] !== 2000;

  return (
    <div className="relative inline-block">
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[rgb(255,255,255)] text-white px-[32px] py-[14px] rounded-[30px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px] hover:bg-[#c5543d] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl text-center"
      >
        <span className="text-[rgb(0,0,0)]">Filter Tours</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        {hasActiveFilters && (
          <span className="ml-1 bg-white text-[#DF6951] rounded-full w-6 h-6 flex items-center justify-center text-[12px]">
            !
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-[20px] shadow-2xl border-2 border-[#DF6951]/20 p-5 w-[700px] max-h-[550px] overflow-y-auto z-[9999]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-gray-100">
            <h3 className="font-['Volkhov:Bold',sans-serif] text-[20px] text-[#181e4b]">
              Filter Your Adventure
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-[#DF6951] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Destination / Region */}
            <div className="space-y-2">
              <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] text-[#181e4b] mb-2">
                Destination / Region
              </h4>
              {destinations.map(dest => (
                <label key={dest} className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={selectedFilters.destinations.includes(dest)}
                    onCheckedChange={() => toggleFilter('destinations', dest)}
                    className="data-[state=checked]:bg-[#DF6951] data-[state=checked]:border-[#DF6951]"
                  />
                  <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-gray-700 group-hover:text-[#DF6951] transition-colors">
                    {dest}
                  </span>
                </label>
              ))}
            </div>

            {/* Tour Category / Type */}
            <div className="space-y-2">
              <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] text-[#181e4b] mb-2">
                Tour Category / Type
              </h4>
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={selectedFilters.categories.includes(cat)}
                    onCheckedChange={() => toggleFilter('categories', cat)}
                    className="data-[state=checked]:bg-[#DF6951] data-[state=checked]:border-[#DF6951]"
                  />
                  <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-gray-700 group-hover:text-[#DF6951] transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] text-[#181e4b] mb-2">
                Duration
              </h4>
              {durations.map(dur => (
                <label key={dur} className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={selectedFilters.durations.includes(dur)}
                    onCheckedChange={() => toggleFilter('durations', dur)}
                    className="data-[state=checked]:bg-[#DF6951] data-[state=checked]:border-[#DF6951]"
                  />
                  <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-gray-700 group-hover:text-[#DF6951] transition-colors">
                    {dur}
                  </span>
                </label>
              ))}
            </div>

            {/* Difficulty Level */}
            <div className="space-y-2">
              <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] text-[#181e4b] mb-2">
                Difficulty Level
              </h4>
              {difficulties.map(diff => (
                <label key={diff} className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={selectedFilters.difficulties.includes(diff)}
                    onCheckedChange={() => toggleFilter('difficulties', diff)}
                    className="data-[state=checked]:bg-[#DF6951] data-[state=checked]:border-[#DF6951]"
                  />
                  <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-gray-700 group-hover:text-[#DF6951] transition-colors">
                    {diff}
                  </span>
                </label>
              ))}
            </div>

            {/* Group Size or Style */}
            <div className="space-y-2">
              <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] text-[#181e4b] mb-2">
                Group Size / Style
              </h4>
              {groupStyles.map(style => (
                <label key={style} className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={selectedFilters.groupStyles.includes(style)}
                    onCheckedChange={() => toggleFilter('groupStyles', style)}
                    className="data-[state=checked]:bg-[#DF6951] data-[state=checked]:border-[#DF6951]"
                  />
                  <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-gray-700 group-hover:text-[#DF6951] transition-colors">
                    {style}
                  </span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] text-[#181e4b] mb-2">
                Price Range
              </h4>
              <div className="px-2">
                <Slider
                  min={500}
                  max={5000}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="[&_.relative]:bg-gray-200 [&_[role=slider]]:bg-[#DF6951] [&_[role=slider]]:border-[#DF6951] [&_.bg-primary]:bg-[#DF6951]"
                />
                <div className="flex justify-between mt-2">
                  <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[13px] text-[#DF6951]">
                    ${priceRange[0]}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[13px] text-[#DF6951]">
                    ${priceRange[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-5 pt-4 border-t-2 border-gray-100">
            <button
              onClick={clearAllFilters}
              className="flex-1 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-[30px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[13px] hover:bg-gray-200 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={() => {
                // Apply filters logic would go here
                setIsOpen(false);
              }}
              className="flex-1 bg-[#DF6951] text-white px-5 py-2.5 rounded-[30px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[13px] hover:bg-[#c5543d] transition-colors shadow-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
