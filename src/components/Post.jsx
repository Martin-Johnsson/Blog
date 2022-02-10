import { Link, useHistory } from "react-router-dom";
import Header from './Header'
import {typography, ul, button, postBody, typographyPostBody, postCommentDiv} from './modules/styles.css'
import {AiFillHome} from 'react-icons/ai'
const Post = (props) =>{

const {postData: {title, body} } = props
    let history = useHistory()
    return <>

<header className="header">

    {/*<Link to="/">*/}
    <span classname="button" onClick={(() => {history.push("/")})}> <AiFillHome/> Home</span>
    {/*</Link>*/} 

    <Header title="Brandons forum"/> 
        </header>
        <div className="postBody whiteText">
            <h1 className="centerText">{title}</h1>
                <p className="typographyPostBody whiteText">{body}</p>
        </div>
    <div classname="postCommentDiv" >
        <p className="centerText whiteText ">Comments</p>
    </div>
    
    {props.commentData.map((comment, id) => { 
        return (
            <>
                <div className="comment" >
                    <small> Comment from <strong>{comment.name}</strong> <br/> (Email: {comment.email}) <br/> ''{comment.body}''</small>
                </div>
            </>
        )
    
    
    })}
  
   
    </>;
  };
export default Post;