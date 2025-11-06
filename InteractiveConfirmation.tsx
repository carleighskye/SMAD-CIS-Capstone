import { useNavigate } from 'react-router-dom';
import ConfirmationImport from '../imports/Confirmation';

export default function InteractiveConfirmation() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.trim();

    // Navigation links
    if (text === 'Home') {
      navigate('/');
    } else if (text === 'About') {
      navigate('/about');
    } else if (text === 'Tours') {
      navigate('/tours');
    } else if (text === 'Contact') {
      navigate('/contact');
    } else if (text === 'Book Now') {
      navigate('/book');
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <ConfirmationImport />
    </div>
  );
}
