import React, { Component } from "react";
// import "materialize-css/dist/css/materialize.min.css";
import { object } from "prop-types";
import { Link } from "react-router-dom";

class HomeWithId extends Component {
  static propTypes = {
    post: object.isRequired
  };

  render() {
    const { post } = this.props;
    const { id, body } = post;
    return (
      <div className="items" key={id}>
        <Link to={`/comments?postId=${id}`}>Body : {body}</Link>
        <br />
        <Link to={"/"}>
          <span className="backLink">Back to all posts</span>
        </Link>
      </div>
    );
  }
}

export default HomeWithId;
