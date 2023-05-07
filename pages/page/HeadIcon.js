import React from 'react';

const prefex = '/github.io'
const HeadIcon = ({ src, alt }) => {
  return <img src={prefex + src} alt={alt}  className="w-6 h-6 rounded-full" />;
  
};

export default HeadIcon;
