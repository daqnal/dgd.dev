import { useState } from "react";
import "./Projects.css";

export default function Projects({
  activeProjectIndex = 0,
  setActiveProjectIndex = () => {},
}) {
  // const [project, setProject] = useState(0);

  return (
    <div id="projects-container" className="bg-base-100/50 rounded-box">
      <div id="projects-col-1">
        <ButtonList
          activeProjectIndex={activeProjectIndex}
          setActiveProjectIndex={setActiveProjectIndex}
        />
      </div>
      <div id="projects-col-2">hi</div>
    </div>
  );
}

function ButtonList({ activeProjectIndex, setActiveProjectIndex }) {
  function handleClick(index) {
    if (activeProjectIndex !== index) {
      setActiveProjectIndex(index);
    }
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
        <li key={index}>
          <button
            onClick={() => handleClick(index)}
            className={
              activeProjectIndex === index ? "btn btn-disabled" : "btn"
            }
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
