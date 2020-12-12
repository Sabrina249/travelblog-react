import React from 'react';
import './App.css';
import SplittedPage from './components/MainPage';
//import Container from './components/GoogleMapMain';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './components/Contact'
import NewBlogPost from './components/NewPost'
import Background from './BackgroundImage.jpg'
import SingleBlogPost from './components/BlogPostSingle'


function App() {
  return (
    <Router>
    <div className="App" img={Background}>
      <Header/>
      <Route path="/" exact component={SplittedPage} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/newpost" exact component={NewBlogPost} />
      <Route path="/post/:id" component={SingleBlogPost}/>
    </div>
    </Router>
  );
}

export default App;
