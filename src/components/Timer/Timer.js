import { Component, h } from "preact";
import Segment from "../Segment";
import "./Timer.css";

import Book from './icons/OpenBook'
import Pajamas from './icons/Pajamas'
import Toilet from './icons/Toilet'
import Toothbrush from './icons/Toothbrush'
import Wash from './icons/Wash'

export const segmentSizes = (startTime, totalDuration, segments) => {
  let lastTime = startTime;
  return segments.map((time, i) => {
    let duration;
    if (time) {
      duration = time - lastTime;
    } else {
      const remainingTime = totalDuration - (lastTime - startTime);
      const remainingSegments = segments.length - i;
      duration = remainingTime / remainingSegments;
      if (i === 0 || segments[i - 1]) {
        duration = Math.max(duration, Date.now() - lastTime);
      }
    }
    lastTime += duration;
    return duration / totalDuration;
  });
};

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      segments: [
        { color: "#97080E", name: "Pyjamas", completed: false, icon: <Pajamas/> },
        { color: "#DA4B0F", name: "Teeth", completed: false, icon: <Toothbrush/> },
        { color: "#E9B104", name: "Toilet", completed: false, icon: <Toilet/> },
        { color: "#488C13", name: "Wash", completed: false, icon: <Wash/> },
        { color: "#1B55C0", name: "Stories", completed: false, icon: <Book/> }
      ],
      startTime: null,
      totalTime: props.runTime * 60 * 1000
    };

    this.startTimer();
  }

  progressSize() {
    return this.state.startTime
      ? (Date.now() - this.state.startTime) / this.state.totalTime
      : 0;
  }

  progressColor() {
    return this.state.segments.find(s => !s.completed).color;
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({});
      if (this.state.startTime + this.state.totalTime < Date.now()) {
        this.stopTimer()
      }
    }, 100);
    this.setState({ startTime: Date.now() });
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({ startTime: null });
  }

  toggleTimer() {
    if (this.state.startTime) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  modifySegment(index, completed) {
    if (!this.state.startTime) return

    const segments = this.state.segments.slice();
    const segment = { ...segments[index], completed };
    segments.splice(index, 1, segment);
    this.setState({ segments });
  }

  completeSegment() {
    const index = this.state.segments.findIndex(s => !s.completed);
    this.modifySegment(index, Date.now());
  }

  undoSegment() {
    const index = this.state.segments.findIndex(s => !s.completed) - 1;
    this.modifySegment(index, false);
  }

  render(props, state) {
    const sizes = segmentSizes(
      state.startTime,
      state.totalTime,
      state.segments.map(s => s.completed)
    ).reverse();

    return (
      <div class="timer">
        <div
          class="progress"
          style={{
            height: this.progressSize() * 100 + "%",
            backgroundColor: this.progressColor()
          }}
        />
        {state.segments
          .slice()
          .reverse()
          .map((segment, i) => (
            <Segment
              key={segment.name}
              color={segment.color}
              name={segment.name}
              icon={segment.icon}
              completed={!!segment.completed}
              size={sizes[i]}
              onClick={() => {
                if (segment.completed) {
                  this.undoSegment();
                } else {
                  this.completeSegment();
                }
              }}
            />
          ))}
      </div>
    );
  }
}
