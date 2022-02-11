import { Link, useHistory } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import {typography, ul, button, postBody, typographyPostBody, postCommentDiv} from './modules/styles.css'
import {AiFillHome} from 'react-icons/ai'
const Post = (props) =>{

const {postData: {title, body} } = props
    let history = useHistory()
    return <>

<header className="header">

    {/*<Link to="/">*/}
    <i onClick={(() => {history.push("/")})}><AiFillHome/></i>
    {/*</Link>*/} 

    <Header className="textSize"title="Brandons forum"/> 
        </header>
        <div className="postBody whiteText">
            <h1 className="centerText">{title}</h1>
                <p className="typographyPostBody whiteText">{body}</p>
        </div>
    <div classname="postCommentDiv" >
        <p className="centerText whiteText textSize ">Comments</p>
    </div>
    
    {props.commentData.map((comment, id) => { 
        return (
            <>
                <div className="comment" >
                    <p> Comment from <strong>{comment.name}</strong></p>  
                    <p>(Email: {comment.email})</p>
                    <p>''{comment.body}''</p>
                </div>
                <Footer copyright=" @ Copyright 2022"/>
            </>
        )
    
    
    })}
  
   
    </>;
  };
export default Post;