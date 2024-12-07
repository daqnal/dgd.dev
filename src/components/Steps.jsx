import "./Steps.css";
import { motion } from "motion/react";
import {
  Smile,
  Presentation,
  BrainCircuit,
  User,
  Link2,
  CodeXml,
} from "lucide-react";
import { div } from "motion/react-client";
import { createContext, useState } from "react";

export default function Steps() {
  const [percentage, setPercentage] = useState(0);

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
    <div id="steps-container">
      <motion.svg
        id="animated-progress-svg"
        className="progress-svg"
        width="48"
        height="400"
        viewBox="0 0 48 400"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          id="animated-progress-line"
          className="progress-line"
          x1="24"
          y1="30"
          x2="24"
          y2={`${30 + percentage * 340}`}
          // y2={`${30 + (percentage / 100) * 340}`}
          stroke="white"
          variants={draw}
          custom={2}
        />
      </motion.svg>

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

      <StepButton
        percentage={percentage}
        onChangePercentage={() => setPercentage(0)}
        text="First Glance"
        icon={Smile}
        progress={0}
      />
      <StepButton
        percentage={percentage}
        onChangePercentage={() => setPercentage(0.2)}
        text="Projects"
        icon={Presentation}
        progress={1 / 5}
      />
      <StepButton
        percentage={percentage}
        onChangePercentage={() => setPercentage(0.4)}
        text="Skills"
        icon={BrainCircuit}
        progress={2 / 5}
      />
      <StepButton
        percentage={percentage}
        onChangePercentage={() => setPercentage(0.6)}
        text="About"
        icon={User}
        progress={3 / 5}
      />
      <StepButton
        percentage={percentage}
        onChangePercentage={() => setPercentage(0.8)}
        text="Links"
        icon={Link2}
        progress={4 / 5}
      />
      <StepButton
        percentage={percentage}
        onChangePercentage={() => setPercentage(1)}
        text="Site Info"
        icon={CodeXml}
        progress={5 / 5}
      />
    </div>
  );
}

function StepButton({ onChangePercentage, icon: Icon, text, progress }) {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-circle"
        onClick={onChangePercentage}
      >
        <Icon />
      </motion.button>
    </div>
  );
}
