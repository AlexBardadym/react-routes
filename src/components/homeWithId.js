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
    const { id, title, body } = post;
    return (
      <div className="items" key={id}>
        <Link to={`/posts/${id}/comments`}>Body : {body}</Link>
        <br />
        <Link to={"/"}>Back to all posts</Link>
      </div>
    );
  }
}

export default HomeWithId;
