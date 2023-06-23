import React from 'react';
import { IMAGES } from './data';



function StarRating({ max, rating, onRate }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(
      <span 
        key={i}
        style={{ cursor: 'pointer' }}
        onClick={() => onRate(i)}
      >
        {i <= rating ? '⭐' : '☆'}
      </span>
    );
  }

  return (
    <div>{stars}</div>
  );
}


export default StarRating