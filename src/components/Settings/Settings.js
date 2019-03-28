import { h } from "preact";

import "./Settings.css";

export default ({ runTime, onTimeChange, onRoutineChange, onClickStart }) => {
  return (
    <div className="settings">
      <div className="row">
        <label for="runTime">Time</label>
        <input
          id="runTime"
          type="number"
          min={0}
          max={99}
          step={1}
          required
          value={runTime}
          onInput={onTimeChange}
        />
      </div>
      <div className="row">
        <label for="routine">Routine</label>
        <select id="routine" onChange={onRoutineChange}>
          <option>No bath</option>
        </select>
      </div>
      <div className="row">
        <button onClick={onClickStart}>Start</button>
      </div>
    </div>
  );
};
