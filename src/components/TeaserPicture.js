import React from 'react';
import './TeaserPicture.css'

const TeaserPicture = ({img, alt}) => {
    return (
      <div>
        <img className="TeaserPicture_frame" src={img} alt={alt} />
      </div>
    )
  }
  
  export default TeaserPicture