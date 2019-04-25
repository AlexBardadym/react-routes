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
    loader: true,
    commentsId: 0
  };

  async componentDidMount() {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");

      const postsFromApi = await result.json();

      this.setState({
        posts: [...postsFromApi],
        loader: false
      });
    } catch (error) {
      console.log("Server not respond");
    }
  }

  updateData = currentId => this.setState({ commentsId: currentId });

  render() {
    const { posts, loader, commentsId } = this.state;

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
                  updateData={this.updateData}
                />
              )}
            />
            <Route
              exact
              path="/comments"
              render={() => <Comment currentId={commentsId} />}
            />
          </Switch>
        )}
      </div>
    );
  }
}

export default withRouter(App);
