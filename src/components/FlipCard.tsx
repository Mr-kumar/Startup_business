import React from 'react';
import Image from 'next/image';

// Define the interface for the props
interface FlipCardProps {
  title: string;
  shortText: string;
  backText: string;
  className?: string;
  frontClassName?: string;
  backClassName?: string;
  icon?: React.ReactNode;
  accentColor?: string;
  textColor?: string;
}

// Define the component with the typed props
const FlipCard: React.FC<FlipCardProps> = ({ title, shortText, backText, className, frontClassName, backClassName, icon }) => {
  return (
    <div className={`group perspective ${className ?? ''}`}>
      <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className={`absolute inset-0 rounded-xl shadow-md p-5 backface-hidden ${frontClassName ?? 'bg-white'}`}>
          <div className="text-center mb-3">
            <div className="w-12 h-12 bg-gray-100 mx-auto rounded flex items-center justify-center">
              {icon ?? (
                <Image 
                  src="https://corpbiz.io/img/type_icon1.webp" 
                  alt="icon" 
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              )}
            </div>
          </div>
          <h3 className="font-semibold text-md mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{shortText}</p>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 rounded-xl shadow-md p-5 rotate-y-180 backface-hidden ${backClassName ?? 'bg-gray-100'}`}>
          <p className="text-gray-800 text-sm">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
