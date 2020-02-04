import StarRatings from 'react-star-ratings';
import React, {useState,useEffect} from 'react'
 
//Page de npm https://www.npmjs.com/package/react-star-ratings

const Rating = ({stars,change,setStars}) => {
    const [rating, setRating] = useState(stars); 
    
    const handleRating = ( newRating, name ) => {
      setRating(newRating);
      setStars (newRating);
    }

    useEffect (()=>{
      console.log('estrellas',stars);
      
      if (change){
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
            isSelectable={false}
        />
        );
    }
 
    
}

export default Rating;