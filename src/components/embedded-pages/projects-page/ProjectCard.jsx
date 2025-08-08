import "./ProjectCard.css";
import {SquareArrowOutUpRight} from "lucide-react";

export default function ProjectCard({project}) {

  return (
    <div className="project-card">
      <img className="project-img rounded-box shadow-xl" src={project.imageSource} alt={project.description} />
      <p className="project-desc">{project.description}</p>
      <a href={project.link} target="_blank">
        <button className="btn">
            <span>Visit <i>{project.label}</i></span>
            <SquareArrowOutUpRight className="link-button-icon"/>
        </button>
      </a>
    </div>
  )
}