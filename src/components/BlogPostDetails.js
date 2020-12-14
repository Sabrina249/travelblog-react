import React from 'react';
import {useParams, Link} from 'react-router-dom'
import post from './post'
import SingleBlogPost from './BlogPostSingle';
import './BlogPostDetails.css';


const Details = () => {

//getID from Params
  const { id } = useParams()

  //console.log(post)
 // console.log(id)

//find matchingBlogpost for id
  const matchingBlog = post.find(post => post.id === parseInt(id))

console.log(matchingBlog)
console.log(id)

//display backbutton and Blogpost
  return (
    <div className="Container_details">
    <Link to={`/`}><h2>Zurück</h2></Link>
    <div><SingleBlogPost post={matchingBlog}/></div>
    </div>
  )
}

export default Details;