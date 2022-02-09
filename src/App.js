import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  console.log(posts);
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage posts={posts} {...props} />}
        />
        <Route path="/post/:id" render={(props) => <PostsPage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
