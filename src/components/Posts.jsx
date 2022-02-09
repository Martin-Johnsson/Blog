import React from 'react';
import {Link} from 'react-router-dom'
const Posts = (props) => {

  console.log(props)
  return <>

  <ul>

  {props.posts.map((post,i ) => { return ( <Link key={i}
  to={{
    pathname:`/post/${post.id}`,
    postDetails:{...post}
    }}> 
  <li>Titel: {post.title}</li> 
  </Link> )
  })}

  </ul>
  </>;
};

export default Posts;
