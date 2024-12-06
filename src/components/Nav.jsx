import { useState } from "react";
import { SITE_TITLE } from "../consts.ts";
import "./Nav.css";
import { SITE_DOMAIN } from "../consts.ts";
import {
  Palette,
  Home,
  Newspaper,
  User,
  Presentation,
  BrainCircuit,
  Link2,
  CodeXml,
} from "lucide-react";
import NavButton from "./NavButton.jsx";

export default function Nav() {
  return (
    <div id="nav" className="bg-base-200/70 p-2">
      <span>
        <button className="btn btn-sm btn-ghost pl-1 pr-2">
          <img src="/images/logo.webp" alt="logo" id="mini-nav-logo" />
          {SITE_TITLE}
        </button>
      </span>

      <div id="nav-btn-container" className="flex">
        <NavButton text="Landing" component={Home} classes="mr-1" />
        <NavButton text="Projects" component={Presentation} classes="mr-1" />
        <NavButton text="Skills" component={BrainCircuit} classes="mr-1" />
        <NavButton text="About" component={User} classes="mr-1" />
        <NavButton text="Links" component={Link2} classes="mr-1" />
        <NavButton text="Site Info" component={CodeXml} />

        {/* <NavButton text="Posts" component={Newspaper} /> */}

        <ThemeSwitcher />
      </div>
    </div>
  );
}

function ThemeSwitcher() {
  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        id="theme-button"
        className="btn btn-sm ml-1"
      >
        <Palette className="icon" />
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-100 rounded-box absolute z-20 w-30 p-2 shadow-2xl"
        data-choose-theme
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Default"
            value="default"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Dark"
            value="dark"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Light"
            value="light"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Night"
            value="night"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Nord"
            value="nord"
          />
        </li>
      </ul>
    </div>
  );
}
