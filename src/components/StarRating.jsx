import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating); 
    const emptyStars = 5 - filledStars; 

    const starsArray = [];

    for (let i = 0; i < filledStars; i++) {
      starsArray.push(<FontAwesomeIcon key={`star-filled-${i}`} icon={faStar} style={{ color: '#FF6060' }} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      starsArray.push(<FontAwesomeIcon key={`star-empty-${i}`} icon={faStar} />);
    }

    return starsArray;
  };

  return (
    <div className="star-rating">
      {renderStars(rating)}
    </div>
  );
};

export default StarRating;