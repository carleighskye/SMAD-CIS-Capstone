import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from "../imports/svg-3stxu1uydf";
import imgImage1 from "figma:asset/cd46c95b3d29634980166261065a2a2933a11888.png";
import imgImage2 from "figma:asset/169950b81657969fef26e0da1630791b4184721f.png";
import imgImage3 from "figma:asset/bf2057eb3b24a8503ec2eb8f881d5a6da24960be.png";
import imgImage4 from "figma:asset/c317fbac11097d991178e071613dfc65ee7a42ea.png";

export default function MemoriesFooter() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [imgImage1, imgImage2, imgImage3, imgImage4];
  
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return null;
}
