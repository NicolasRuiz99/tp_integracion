import StarRatings from 'react-star-ratings';
import React, {useState,useEffect} from 'react'
 
//Page de npm https://www.npmjs.com/package/react-star-ratings

const Rating = ({stars,change}) => {
    
    const [rating, setRating] = useState(0); //Por default
    
    const handleRating = ( newRating, name ) => {
      setRating(newRating);
    }

    useEffect (()=>{
      if (!change){
        setRating (stars);
      }
    },[change, stars])

    if (change){
      return (
        <StarRatings
            rating={rating}
            starRatedColor="yellow"
            changeRating={handleRating}
            numberOfStars={6}
            name='rating'
            starDimension={'22px'}
        />
        );
    }else {
      return (
        <StarRatings
            rating={rating}
            starRatedColor="yellow"
            numberOfStars={6}
            name='rating'
            starDimension={'22px'}
        />
        );
    }
 
    
}

export default Rating;