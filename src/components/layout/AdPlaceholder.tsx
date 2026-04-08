import React from 'react';
import { cn } from '../../lib/utils';

interface AdPlaceholderProps {
  className?: string;
  label?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className, label = "פרסומת" }) => {
  return (
    <div className={cn("ad-placeholder", className)}>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] opacity-50">Google AdSense</span>
        <span className="font-bold tracking-[0.2em]">{label}</span>
      </div>
    </div>
  );
};
