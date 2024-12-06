import "./Steps.css";
import { motion } from "motion/react";
import {
  Home,
  Presentation,
  BrainCircuit,
  User,
  Link2,
  CodeXml,
} from "lucide-react";
import { div } from "motion/react-client";

export default function Steps() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
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
    <div id="steps-container">
      <motion.svg
        id="progress-svg"
        width="48"
        height="400"
        viewBox="0 0 48 400"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          id="progress-line"
          x1="24"
          y1="30"
          x2="24"
          y2="370"
          stroke="#00cc88"
          variants={draw}
          custom={2}
        />
      </motion.svg>

      <StepButton text="Landing" icon={Home} />
      <StepButton text="Projects" icon={Presentation} />
      <StepButton text="Skills" icon={BrainCircuit} />
      <StepButton text="About" icon={User} />
      <StepButton text="Links" icon={Link2} />
      <StepButton text="Site Info" icon={CodeXml} />
    </div>
  );
}

function StepButton({ icon: Icon, text }) {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-circle"
      >
        <Icon />
      </motion.button>
    </div>
  );
}
