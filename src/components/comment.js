import React, { Component } from "react";
// import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class Comment extends Component {
  state = {
    id: 1,
    comments: []
  };

  async componentDidMount() {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${
          this.props.currentId
        }`
      );

      const commentsFromApi = await result.json();

      this.setState({
        comments: [...commentsFromApi]
      });
    } catch (error) {
      console.log("Server not respond");
    }
  }

  renderComments = obj => {
    const { id, postId, name, email, body } = obj;
    return (
      <div className="items" key={id}>
        <Link to={`/posts/${postId}`}>
          <span className="backLink">Back to post with id </span>
        </Link>
        <br /> Id : {id}
        <br /> postId : {postId}
        <br /> name : {name}
        <br /> email : {email}
        <br /> body : {body}
        <br />{" "}
        <Link to={"/"}>
          <span className="backLink">Back to all posts</span>
        </Link>
      </div>
    );
  };

  render() {
    const { comments } = this.state;
    return <div>{comments.map(comments => this.renderComments(comments))}</div>;
  }
}

export default Comment;
