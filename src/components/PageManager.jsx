import { useState } from "react";

import "./PageManager.css";
import Arrow from "../components/Arrow.jsx";

import Landing from "./embedded-pages/Landing.jsx";
import Projects from "./embedded-pages/Projects.jsx";
import Skills from "./embedded-pages/Skills.jsx";
import About from "./embedded-pages/About.jsx";
import Links from "./embedded-pages/Links.jsx";

export default function PageManager() {
  const PAGE_LIST = [Landing, Projects, Skills, About, Links];
  const [showUpButton, setShowUpButton] = useState(false);
  const [showDownButton, setShowDownButton] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [page, setPage] = useState(Landing);

  function handlePageSwitching(direction) {
    console.log(direction);

    let newIndex;
    if (direction === "up") {
      newIndex = pageIndex - 1;
    } else if (direction === "down") {
      newIndex = pageIndex + 1;
    }

    // Show/hide the up or down button
    if (newIndex === PAGE_LIST.length - 1) {
      setShowUpButton(true);
      setShowDownButton(false);
    } else if (newIndex === 0) {
      setShowUpButton(false);
      setShowDownButton(true);
    } else {
      setShowUpButton(true);
      setShowDownButton(true);
    }

    // Move to the next/previous component
    setPage(PAGE_LIST[newIndex]);
    setPageIndex(newIndex);
  }

  return (
    <div id="main-content-container">
      <div class="arrow-btn-container">
        {showUpButton && (
          <Arrow
            orientation="up"
            onDataReceived={() => handlePageSwitching("up")}
          />
        )}
      </div>

      <div id="pages-container">{page}</div>

      <div class="arrow-btn-container">
        {showDownButton && (
          <Arrow
            orientation="down"
            onDataReceived={() => handlePageSwitching("down")}
          />
        )}
      </div>
    </div>
  );
}
