import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/schedule" component={Schedule} /> */}
        </Switch>
      </main>
    );
  }
}

export default Main;
