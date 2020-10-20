import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import RichText from "./rich-text/index";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <p>自己的富文本编辑器</p>
        <RichText />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
