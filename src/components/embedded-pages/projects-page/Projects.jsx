import { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      label: "React Games",
      description: "My first React project, a stylish site with tic-tac-toe and Otrio.",
      imageSource: "/images/projects/react_games.png",
      link: "https://react-astro-games.vercel.app/"
    },
    {
      label: "Portfolio Site",
      description: "The site you are looking at right now. For details on development, visit the Github below.",
      imageSource: "/images/projects/portfolio.png",
      link: "https://github.com/daqnal/dgd.dev"
    },
    {
      label: "Blog Template",
      description: "A starter template for creating a customized blog using the Hugo SSG, with Pagefind for integrated search and PicoCSS for nice styles.",
      imageSource: "/images/projects/blog.png",
      link: "https://github.com/daqnal/blog-template"
    },
    {
      label: "Minisite Template",
      description: "A simple, small, and stylish landing page template for a personal website.",
      imageSource: "/images/projects/minisite.png",
      link: "https://github.com/daqnal/personal-minisite-template"
    },
    {
      label: "rat",
      description: "lovely spinning rat.",
      imageSource: "/images/projects/rat.png",
      link: "https://rat.dance/"
    }
  ];

  return (
    <div id="projects-container" className="bg-base-100/50 rounded-box">
      <div id="projects-col-1">
        <ButtonList 
          activeProjectIndex={activeProjectIndex} 
          setActiveProjectIndex={setActiveProjectIndex}
          projects={projects}
        />
      </div>
      <div id="projects-col-2">
        <ProjectCard project={projects[activeProjectIndex]} />
      </div>
    </div>
  );
}

function ButtonList({ activeProjectIndex, setActiveProjectIndex ,projects }) {

  function handleClick(index) {
    if (activeProjectIndex !== index) {
      setActiveProjectIndex(index);
    }
  }

  return (
    <ul className="menu bg-base-200 rounded-box w-56" id="button-list">
      {projects.map(({label}, index) => (
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