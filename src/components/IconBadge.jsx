import React from 'react';

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
};

const variantClasses = {
  solid: 'bg-[#004D40] text-white',
  soft: 'bg-[#004D40]/10 text-[#004D40] group-hover:bg-[#004D40] group-hover:text-white',
  dark: 'bg-white/10 text-white',
};

const IconBadge = ({ size = 'md', variant = 'soft', className = '', children }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export default IconBadge;
