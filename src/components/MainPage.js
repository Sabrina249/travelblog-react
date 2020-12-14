import React from 'react';
import List from './BlogPostPreview';
//import post from './post';
import MapMain from './GoogleMapMain';
import './MainPage.css'


function SplittedPage() {
    return (
        <div className="Split_maincontainer">
        <div className="Blog_container"><List/></div>
        <div className="Map_container"><MapMain/></div>
        </div>
    );
}

export default SplittedPage;