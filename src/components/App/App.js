import { Component, h } from "preact";
import Timer from "../Timer";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
  }

  render(props, state) {
    return (
      <Timer/>
    );
  }
}
