import React from 'react';
import SingleBlogPost from './BlogPostSingle';
//import post from './post';
import './InfoWindow.css';
import { Link } from 'react-router-dom'



//display infowindow & link to details page

const Infowindow =({post, closeInfo}) => {
    return (
    <div onClick={closeInfo}>
    <div className="Container_Infowindow">
    <Link to={`/post/${post.id}`}><h2>Details</h2></Link>
    <SingleBlogPost post={post}/>
      </div>
      </div>
  )
}
  
export default Infowindow;