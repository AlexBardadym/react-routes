import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/posts/1">Post 1</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
