import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";

export default function Arrow(props) {
  let arrowIcon;
  if (props.orientation === "up") {
    arrowIcon = <ChevronUp />;
  } else {
    arrowIcon = <ChevronDown />;
  }

  function handleClick() {
    props.onDataReceived();
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="btn btn-circle bg-base-200/70 border-none"
    >
      {arrowIcon}
    </motion.button>
  );
}
