import React, { Component } from "react";
import "./App.css";
import Loader from "./components/loader/loader";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/home/home";
import HomeWithId from "./components/homewithid/homeWithId";
import Comment from "./components/comment/comment";
import { connect } from "react-redux";
import * as appActions from "./modules/app/app.actions";

class App extends Component {
  state = {
    posts: [],
    loader: true
  };

  componentDidMount() {
    this.props.fetchAllData();
  }
  renderLoader = () => {
    const { loader } = this.props;

    if (loader) {
      return <Loader />;
    }
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="wrapper">
        {this.renderLoader()}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/posts/:id"
            render={props => (
              <HomeWithId {...props} post={posts[props.match.params.id - 1]} />
            )}
          />
          <Route exact path="/comments" component={Comment} />} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ app }) {
  return {
    loader: app.loader
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { ...appActions }
  )(App)
);
