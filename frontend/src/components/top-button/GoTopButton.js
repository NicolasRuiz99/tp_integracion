import React from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";


class GoTopButton extends React.Component {
  
  render() {

    return ( 
      <div>
        <ScrollUpButton 
        EasingType="easeInOutSine"
        style={{
          background: 'rgba(56, 167, 187, 0.9)',
        }} />
      </div>
    );
  }

}

export default GoTopButton;