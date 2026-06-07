import React, { useState } from 'react';

interface ProjectImageProps {
  src?: string;
  alt: string;
  aspectRatio?: 'video' | 'square' | 'wide' | 'sixteen-nine';
  className?: string;
}

export default function ProjectImage({ src, alt, aspectRatio = 'video', className = '' }: ProjectImageProps) {
  const [hasError, setHasError] = useState(!src);

  const aspectClass = {
    video: 'aspect-video',
    'sixteen-nine': 'aspect-[16/9]',
    square: 'aspect-square',
    wide: 'aspect-[21/9]'
  }[aspectRatio] || 'aspect-[16/9]';

  return (
    <div className={`relative overflow-hidden w-full rounded-sm bg-[#FAF9F5] ${aspectClass} ${className}`}>
      {/* Real image tag that will resolve once dropped locally */}
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white text-center select-none">
          <div className="max-w-md space-y-2">
            <span className="text-[10px] uppercase font-black tracking-widest text-brand-black/30 block">
              visual asset placeholder
            </span>
            <p className="text-sm font-semibold tracking-tight text-brand-black/70 italic">
              {alt}
            </p>
            <span className="text-[9px] font-mono text-brand-black/25 block">
              src: {src || 'not defined'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
