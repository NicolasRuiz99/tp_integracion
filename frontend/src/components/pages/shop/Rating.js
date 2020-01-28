import StarRatings from 'react-star-ratings';
import React, {useState,useEffect} from 'react'
 
//Page de npm https://www.npmjs.com/package/react-star-ratings

const Rating = ({stars,change,setStars, isDefault}) => {
   let star; 
    if (isDefault !== null) {
      star = stars;
    }
    else {
      star = 0
    }

    const [rating, setRating] = useState(star); //Por default
    
    const handleRating = ( newRating, name ) => {
      setRating(newRating);
      setStars (newRating);
    }

    useEffect (()=>{
      if (!change){
        setRating (stars);
      }else{
        setStars(0);
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
            isSelectable={false}
        />
        );
    }
 
    
}

export default Rating;