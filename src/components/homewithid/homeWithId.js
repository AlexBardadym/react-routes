import React, { Component } from "react";
// import "materialize-css/dist/css/materialize.min.css";
import { array } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as appActions from "../../modules/app/app.actions";

class HomeWithId extends Component {
  static propTypes = {
    postById: array.isRequired
  };

  renderLine = obj => {
    const { name, email, postId, id, body } = obj;
    return (
      <div className="items" key={id}>
        <br /> Name : {name}
        <br /> email : {email}
        <br /> postId : {postId}
        <br /> id : {id}
        <br /> body : {body}
        <br />{" "}
        <Link to={"/"}>
          <span className="backLink">Back to all posts</span>
        </Link>
      </div>
    );
  };

  render() {
    const { postById } = this.props;
    return <div>{postById.map(postById => this.renderLine(postById))}</div>;
  }
}

function mapStateToProps({ app }) {
  return {
    postById: app.postById
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(HomeWithId);
