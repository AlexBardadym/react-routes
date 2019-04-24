import React, { Component } from "react";
import "./App.css";
import Loader from "./components/loader";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/home";
import HomeWithId from "./components/homeWithId";
import Comment from "./components/comment";

class App extends Component {
  state = {
    posts: [],
    loader: true
  };

  async componentDidMount() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");

    const postsFromApi = await result.json();

    this.setState({
      posts: [...postsFromApi],
      loader: false
    });
  }

  render() {
    const { posts, loader } = this.state;

    return (
      <div className="wrapper">
        {loader ? (
          <Loader />
        ) : (
          <Switch>
            <Route exact path="/" render={() => <Home posts={posts} />} />
            <Route
              exact
              path="/posts/:id"
              render={props => (
                <HomeWithId
                  {...props}
                  post={posts[props.match.params.id - 1]}
                />
              )}
            />
            <Route path="/posts/:id/comments" component={Comment} />
          </Switch>
        )}
      </div>
    );
  }
}

export default withRouter(App);
