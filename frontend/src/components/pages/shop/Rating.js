import StarRatings from 'react-star-ratings';
import React, {useState} from 'react'
 
//Page de npm https://www.npmjs.com/package/react-star-ratings

const Rating = ({stars}) => {
    
    const [rating, setRating] = useState(2); //Por default
    
    const handleRating = ( newRating, name ) => {
      setRating(newRating);
    }
 
    return (
    <StarRatings
        rating={rating}
        starRatedColor="yellow"
        changeRating={handleRating}
        numberOfStars={stars}
        name='rating'
        starDimension={'22px'}
    />
    );
}

export default Rating;