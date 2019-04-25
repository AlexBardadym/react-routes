import React, { Component } from "react";
import "./home.css";
import { array } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as appActions from "../../modules/app/app.actions";

class Home extends Component {
  static propTypes = {
    posts: array.isRequired
  };

  renderLineTable = obj => {
    const { id, title, userId } = obj;
    return (
      <div className="items" key={id}>
        <Link to={`/posts/${id}`}>
          Id : {id}
          <br /> UserId : {userId}
          <br /> Title : {title}{" "}
        </Link>
      </div>
    );
  };

  render() {
    const { posts } = this.props;
    return <div>{posts.map(post => this.renderLineTable(post))}</div>;
  }
}

function mapStateToProps({ app }) {
  return {
    posts: app.posts
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(Home);
