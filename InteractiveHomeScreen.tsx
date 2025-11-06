import { useNavigate } from 'react-router-dom';
import InteractiveHeader from './InteractiveHeader';
import HomeScreenContent from '../imports/HomeScreen-51-1131';

export default function InteractiveHomeScreen() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white w-full min-h-screen relative">
      {/* Transparent Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 px-[40px] md:px-[80px] py-[20px]">
        <div className="max-w-[1440px] mx-auto">
          <InteractiveHeader transparent={true} />
        </div>
      </div>

      {/* Home Screen Content with clickable buttons */}
      <div 
        className="relative cursor-default"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Check if click was on "Book Now" button area
          const bookNowButton = target.closest('[data-book-now]');
          if (bookNowButton) {
            e.stopPropagation();
            navigate('/book');
            return;
          }
          
          // Check for any button text that says "Book Now"
          if (target.textContent?.includes('Book Now')) {
            e.stopPropagation();
            navigate('/book');
            return;
          }
        }}
      >
        <HomeScreenContent />
      </div>

      {/* Invisible overlay buttons positioned over the Figma buttons */}
      <button
        onClick={() => navigate('/book')}
        className="absolute left-[131px] top-[570px] w-[120px] h-[50px] opacity-0 cursor-pointer z-10"
        aria-label="Book Now"
      />
    </div>
  );
}
