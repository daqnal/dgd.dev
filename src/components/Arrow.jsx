import { ChevronDown, ChevronUp } from "lucide-react";

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
    <button
      onClick={handleClick}
      className="btn btn-circle bg-base-200/70 border-none"
    >
      {arrowIcon}
    </button>
  );
}
