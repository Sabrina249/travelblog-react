import React from 'react';
import List from './BlogPostPreview';
import post from './post.data';
import MapContainer from './GoogleMapMain';


function SplittedPage() {
    return (
        <div>
        <div><List post={post}/></div>
        <div><MapContainer/></div>
        </div>
    );
}

export default SplittedPage;