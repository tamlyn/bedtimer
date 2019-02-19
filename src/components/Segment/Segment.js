import { h } from "preact";
import "./Segment.css";

const Segment = ({ color, name, size, icon, completed, ...props }) => (
  <div
    class="segment"
    style={{
      backgroundColor: completed ? color : "transparent",
      height: `${size * 100}%`
    }}
    {...props}
  >
    {icon}
    {name}
  </div>
);
export default Segment;
