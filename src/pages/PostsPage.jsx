import React from 'react';
import Header from '../components/Header';
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Post from '../components/Post'

const PostsPage = (props) => {
const [postData, setPostData] = useState([])
const [commentData, setCommentData] = useState([])

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => response.json()).then((json) => setPostData(json))
    }, )
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`).then((response) => response.json()).then((json) => setCommentData(json))
    },)


  return (<div>
        <Post postData = {postData} commentData = {commentData}/>
      
  </div>)
};

export default PostsPage;
