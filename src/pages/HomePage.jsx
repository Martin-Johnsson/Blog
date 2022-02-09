import React from 'react';
import Header from '../components/Header'
import Posts from '../components/Posts'
const HomePage = (props) => {

    

  return (
  <div>
    <Header title="Home Page"/>
    <Posts posts={props.posts}/>
  </div>
  )
};

export default HomePage;
