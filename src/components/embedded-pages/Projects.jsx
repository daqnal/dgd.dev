import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  // const [project, setProject] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="projects-container" className="bg-base-100/50 rounded-box">
      <div id="projects-col-1">
        <ButtonList activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <div id="projects-col-2">hi</div>
    </div>
  );
}

function ButtonList({ activeIndex, setActiveIndex }) {
  function handleClick(index) {
    setActiveIndex(index);
  }

  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      {[
        "React Games",
        "Portfolio Site",
        "Blog Template",
        "Minisite Template",
        "rat",
      ].map((label, index) => (
        <li>
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={activeIndex === index ? "btn btn-disabled" : "btn"}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ReactGamesProject() {
  return <h2>React Games</h2>;
}

function PortfolioProject() {
  return <h2>Portfolio</h2>;
}
