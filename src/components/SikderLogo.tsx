import React from 'react';
import logoImg from '../assets/images/regenerated_image_1779555216102.jpg';

interface SikderLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // light variant for dark Bg, dark variant for light Bg
  height?: number | string;
}

const SikderLogo: React.FC<SikderLogoProps> = ({ 
  className = '', 
  variant = 'light',
  height 
}) => {
  const isDarkBg = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-2 md:gap-3 shrink-0 ${className}`} style={{ height: height || 'auto' }}>
      {/* 
        This is the editable logo image. You can overwrite or replace the file 
        located at src/assets/images/sikder_logo_1779214806600.png to update this icon image.
      */}
      <img 
        src={logoImg} 
        alt="Sikder Logo" 
        className="h-8 md:h-10 w-auto object-contain max-w-[80px]"
        referrerPolicy="no-referrer"
      />
      
      {/* SIKDER text on the right */}
      <span 
        className={`font-display font-black uppercase tracking-wider text-lg md:text-xl ${
          isDarkBg ? 'text-white' : 'text-brand-purple'
        }`}
      >
        Sikder
      </span>
    </div>
  );
};

export default SikderLogo;
