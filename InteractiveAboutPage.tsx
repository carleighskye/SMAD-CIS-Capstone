import { useNavigate } from 'react-router-dom';
import InteractiveHeader from './InteractiveHeader';
import AboutPageContent from './AboutPageContent';

export default function InteractiveAboutPage() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.trim();

    // Navigation for clickable elements
    if (text === 'Home') {
      navigate('/');
    } else if (text === 'About') {
      navigate('/about');
    } else if (text === 'Tours') {
      navigate('/tours');
    } else if (text === 'Contact') {
      navigate('/contact');
    } else if (text === 'Book Now' || text === 'More About Us') {
      navigate('/book');
    }
  };

  return (
    <div className="bg-white w-full min-h-screen relative">
      {/* Transparent Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 px-[40px] md:px-[80px] py-[20px]">
        <div className="max-w-[1440px] mx-auto">
          <InteractiveHeader transparent={true} />
        </div>
      </div>

      {/* About Page Content with interactive elements */}
      <div onClick={handleClick} className="relative">
        <AboutPageContent />
      </div>

      {/* Invisible overlay button for "More About Us" button */}
      <button
        onClick={() => navigate('/book')}
        className="absolute left-[190px] top-[308px] w-[186px] h-[48px] opacity-0 cursor-pointer z-10"
        aria-label="More About Us"
      />
    </div>
  );
}
