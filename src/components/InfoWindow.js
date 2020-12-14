import React from 'react';
import SingleBlogPost from './BlogPostSingle';
//import post from './post';



//display infowindow & link to details page

const Infowindow =({post, closeInfo}) => {
    return (
    <div onClick={closeInfo}>
    <div className="Card__row">
    <SingleBlogPost post={post}/>
      </div>
      </div>
  )
}
  
export default Infowindow;