import "./Projects.css";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <div id="projects-container" className="bg-base-100/50 rounded-box">
      <div id="projects-col-1">
        <ul className="menu bg-base-200 rounded-box w-56">
          <li>
            <button className="btn">React Games</button>
          </li>
          <li>
            <button className="btn btn-disabled">Portfolio Site</button>
          </li>
          <li>
            <button className="btn">Custom Blog Template</button>
          </li>
          <li>
            <button className="btn">Minisite Template</button>
          </li>
          <li>
            <button className="btn">rat</button>
          </li>
        </ul>
      </div>
      <div id="projects-col-2">
        <img src="/images/me.webp" className="w-48" />
      </div>
    </div>
  );
}
