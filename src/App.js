import React, { Component } from "react";
import MyRouter from "./components/MyRouter/MyRouter";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>React Router lab</h1>
        <MyRouter />
      </React.Fragment>
    );
  }
}

export default App;
