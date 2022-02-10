import React from 'react';
import {Link} from 'react-router-dom'
import {typography, ul, header, ulList} from './modules/styles.css'
const Posts = (props) => {

  console.log(props)
  return <>

  <ul classname="">

  {props.posts.map((post,i ) => { return ( <div className="post thirdColor"> <Link className='ulList centerText' key={i}
  to={{
    pathname:`/post/${post.id}`,
    postDetails:{...post}
    }}> 

  <li classname="typography">Titel: {post.title}</li> 
  
  </Link> </div> )
  })}

  </ul>
  </>;
};

export default Posts;
