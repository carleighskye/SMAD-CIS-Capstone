import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface QuickBookButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function QuickBookButton({ 
  text = "Book Now", 
  variant = 'primary',
  className = '' 
}: QuickBookButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book');
  };

  const baseStyles = "px-[24px] py-[12px] rounded-[8px] transition-all flex items-center gap-[8px] font-['Inter:Medium',sans-serif] font-medium cursor-pointer";
  
  const variantStyles = variant === 'primary'
    ? "bg-[#181e4b] text-white hover:bg-[#0f1435] shadow-lg hover:shadow-xl"
    : "bg-white text-[#181e4b] border-2 border-[#181e4b] hover:bg-[#181e4b] hover:text-white";

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <Calendar className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
}
