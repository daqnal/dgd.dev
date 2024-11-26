import { useState } from "react";
import { SITE_TITLE } from "../consts.ts";
import "./Nav.css"
import { SITE_DOMAIN } from "../consts.ts";
import { Palette, Home, Newspaper, User } from "lucide-react";

export default function Nav() {
    return (
        <div id="nav" className="bg-base-200/70 p-2">
            <span>
              <a href="/" className="btn btn-sm btn-ghost pl-1 pr-2">
                <img src="/images/logo.webp" alt="logo" id="mini-nav-logo"/>
                {SITE_TITLE}
              </a>
            </span>

            <div id="nav-btn-container" className="flex">

              <div>
                <a href="/" className="btn btn-sm btn-circle nav-btn">
                  <Home className="icon nav-btn-icon" />
                  <span className="nav-btn-text">Home</span>
                </a>
              </div>

              <div>
                <a href="/" className="btn btn-sm btn-circle ml-1 nav-btn">
                  <Newspaper className="icon nav-btn-icon" />
                  <span className="nav-btn-text">Posts</span>
                </a>
              </div>

              <div>
                <a href="/" className="btn btn-sm btn-circle ml-1 nav-btn">
                  <User className="icon nav-btn-icon" />
                  <span className="nav-btn-text">About</span>
                </a>
              </div>
              
              <ThemeSwitcher />
            </div>
        </div>
    );
}


function ThemeSwitcher() {

  return (
      <div className="dropdown">
      <div tabIndex={0} role="button" id="theme-button" className="btn btn-sm ml-1">
        <Palette className="icon" />
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-1 w-30 p-2 shadow-2xl" data-choose-theme>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Default"
            value="default" />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Dark"
            value="dark" />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Light"
            value="light" />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Night"
            value="night" />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
            aria-label="Nord"
            value="nord" />
        </li>
      </ul>
    </div>
  )
}