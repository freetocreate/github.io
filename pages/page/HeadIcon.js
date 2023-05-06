import React from 'react';
import Image from 'next/image';
const HeadIcon = ({ src, alt }) => {
  return <Image src={src} alt={alt} loader="default" className="w-6 h-6 rounded-full" />;
  
};

export default HeadIcon;
