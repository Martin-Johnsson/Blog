import React from 'react';
import Header from '../components/Header'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
const HomePage = (props) => {

  return (
  <div>
    <div className="header">
    <Header title="Brandons forum"/>
    </div>
    <Posts posts={props.posts}/>

    <Footer copyright=" @ Copyright 2022"/>
  </div>
  
  )
};

export default HomePage;
