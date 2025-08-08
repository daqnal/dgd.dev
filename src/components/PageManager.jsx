import { useState } from "react";

import "./PageManager.css";

import {
  Smile,
  Presentation,
  BrainCircuit,
  User,
  Link2,
  CodeXml,
} from "lucide-react";

import FirstGlance from "./embedded-pages/first-glance-page/FirstGlance.jsx";
import Projects from "./embedded-pages/projects-page/Projects.jsx";
import Skills from "./embedded-pages/skills-page/Skills.jsx";
import About from "./embedded-pages/about-page/About.jsx";
import Links from "./embedded-pages/links-page/Links.jsx";
import Info from "./embedded-pages/info-page/Info.jsx";

export default function PageManager() {

  const pages = [
    { component: FirstGlance, label: "First Glance", icon: Smile, progress: 0 },
    { component: Projects, label: "Projects", icon: Presentation, progress: 0.2 },
    { component: Skills, label: "Skills", icon: BrainCircuit, progress: 0.4 },
    { component: About, label: "About", icon: User, progress: 0.6 },
    { component: Links, label: "Links", icon: Link2, progress: 0.8 },
    { component: Info, label: "Site Info", icon: CodeXml, progress: 1 },
  ];

  const [pageIndex, setPageIndex] = useState(2);
  const [percentage, setPercentage] = useState(0);

  const ActiveComponent = pages[pageIndex].component;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      console.log(percentage);
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div id="content-steps-container">
      <div id="main-content-container" className="motion-preset-expand">
        <ActiveComponent />
      </div>

      <div id="steps-outer-container">
        <div id="steps-inner-container">
          <svg
            id="animated-progress-svg"
            className="progress-svg"
            width="48"
            height="400"
            viewBox="0 0 48 400"
            initial="hidden"
            animate="visible"
          >
            <line
              id="animated-progress-line"
              className="progress-line"
              x1="24"
              y1="30"
              x2="24"
              y2={`${30 + percentage * 340}`}
              stroke="white"
              variants={draw}
              custom={2}
            />
          </svg>

          <svg
            id="static-progress-svg"
            className="progress-svg"
            width="48"
            height="400"
            viewBox="0 0 48 400"
          >
            <line
              id="static-progress-line"
              className="progress-line"
              x1="24"
              y1="30"
              x2="24"
              y2="360"
              stroke="oklch(0.232607 0.013807 253.101)"
            />
          </svg>

          {pages.map(({ label, icon, progress }, index) => (
            <StepButton
              key={index}
              onChangePage={() => setPageIndex(index)}
              percentage={percentage}
              onChangePercentage={() => setPercentage(progress)}
              text={label}
              icon={icon}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepButton({
  onChangePage,
  onChangePercentage,
  icon: Icon,
  text,
  progress,
}) {
  function handleClick() {
    onChangePercentage();
    onChangePage();
  }

  return (
    <div>
      <button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-circle"
        onClick={handleClick}
      >
        <Icon />
      </button>
    </div>
  );
}
