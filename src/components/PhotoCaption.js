import React from 'react';
import './PhotoCaption.css';

function PhotoCaption({ src, alt, caption }) {
  return (
    <div className="image-container w-30">
      <img src={src} alt={alt} className="w-100" />
      <p className="image-text tc mt3">{caption}</p>
    </div>
  );
}

export default PhotoCaption;
