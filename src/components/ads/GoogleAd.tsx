import React, { useEffect } from 'react';

interface GoogleAdProps {
  slot?: string;
  format?: string;
  responsive?: string;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const GoogleAd: React.FC<GoogleAdProps> = ({ 
  slot, 
  format = 'auto', 
  responsive = 'true',
  className = '',
  style = { display: 'block' }
}) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('Adsbygoogle error:', e);
    }
  }, []);

  // If no slot is provided, we'll show a placeholder in development
  // but in production it would be a real ad unit.
  // Note: ca-pub-2584436354113306 is from the index.html script
  
  return (
    <div className={`ad-container my-1 md:my-4 overflow-hidden flex justify-center w-full max-h-[50px] md:max-h-[100px] ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ ...style, minWidth: '250px', height: '40px' }}
        data-ad-client="ca-pub-2584436354113306"
        data-ad-slot={slot || "1234567890"} // Placeholder slot if not provided
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};
