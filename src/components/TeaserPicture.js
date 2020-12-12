import React from 'react';
import './TeaserPicture.css'

const TeaserPicture = ({img, alt}) => {
    return (
      <div className="TeaserPicture_frame">
        <img src={img} alt={alt} />
      </div>
    )
  }
  
  export default TeaserPicture