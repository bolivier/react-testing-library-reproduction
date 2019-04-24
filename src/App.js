import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Hider from "./Hider";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hider>
          <span>hello world</span>
        </Hider>
      </div>
    );
  }
}

export default App;
