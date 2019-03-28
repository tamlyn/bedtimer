import { Component, h } from "preact";
import Settings from "../Settings";
import Timer from "../Timer";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      view: "settings",
      runTime: 15,
      routine: ""
    };
  }

  render(props, state) {
    switch (state.view) {
      case "timer":
        return <Timer runTime={state.runTime} />;
      case "settings":
      default:
        return (
          <Settings
            runTime={state.runTime}
            onClickStart={() => this.setState({ view: "timer" })}
            onTimeChange={({ target }) =>
              this.setState({ runTime: target.valueAsNumber })
            }
          />
        );
    }
  }
}
