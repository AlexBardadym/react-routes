import React, { Component } from "react";
import "./home.css";
// import "materialize-css/dist/css/materialize.min.css";
import { array } from "prop-types";
import { Link } from "react-router-dom";

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

export default Home;
