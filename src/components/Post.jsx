import { Link, useHistory } from "react-router-dom";

const Post = (props) =>{
const {postData: {title, body} , commentData: {name, body: commentBody, email}} = props
    let history = useHistory()
        return (
            <>
            
            <h1>Titel: {title}</h1>
            <p>{body}</p>
            <p>{name}, {email}</p>
            <small>{commentBody}</small>
             {/*<Link to="/">*/}
             <button onClick={(() => {history.push("/")})}>Back to home</button>
            {/*</Link>*/}
            
            </>
        )
    
}
export default Post;