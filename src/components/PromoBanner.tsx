import { useState } from 'react';
import { X } from 'lucide-react'; // Using lucide for the X icon
import {type PromoBannerProps } from '@/types';


const PromoBanner = ({ message, ctaText, ctaHref }: PromoBannerProps) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-black text-white flex items-center justify-center px-4 py-2 text-sm text-center">
      <div>
        {message}
        {ctaText && ctaHref && (
          <a href={ctaHref} className="underline ml-2 hover:text-gray-300">
            {ctaText}
          </a>
        )}
      </div>
      <button
        onClick={() => setVisible(false)}
        className="cursor-pointer sm:absolute right-20  text-white hover:text-gray-400"
        aria-label="Close banner"
      >
        <X className="h-4 w-4 ml-5" />
      </button>
    </div>
  );
};

export default PromoBanner;
