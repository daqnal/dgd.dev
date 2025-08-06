import { useState, useEffect } from "react";
import "./Projects.css";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(1);
  const projectComponents = [ReactGamesProject, PortfolioProject];
  const Component = projectComponents[activeProjectIndex];

  const projects = [
    {
      label: "React Games",
      component: ReactGamesProject
    },
    {
      label: "Portfolio Site",
      component: PortfolioProject
    }
  ];

  return (
    <div id="projects-container" className="bg-base-100/50 rounded-box">
      <div id="projects-col-1">
        <ButtonList activeProjectIndex={activeProjectIndex} setActiveProjectIndex={setActiveProjectIndex} labels={projects.map(p => p.label)}/>
      </div>
      <div id="projects-col-2">
        <Component />
      </div>
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

function ProjectCard({description, imageSource}) {

  return (
    <>
      <img src={imageSource} alt={description} />
      <p>{description}</p>
    </>
  )
}

function ReactGamesProject() {
  return <ProjectCard
    description="My first React project, a stylish site with tic-tac-toe and Otrio"
    imageSource="/images/projects/react_games.png"
  />;
}

function PortfolioProject() {
  return <ProjectCard
    description="desc"
    imageSource="ok"
  />;
}
