"use client";

import { useState } from "react";
import NavList from "./NavList";

export default function Hamburger({
  navigationSelect,
}: {
  navigationSelect: { name: string; url: string; currentPage: boolean }[];
}) {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative">
      <button onClick={handleClick}>
        <svg
          width="48"
          height="40"
          viewBox="0 0 38 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4.09091H34"
            stroke="#FFFAE1"
            strokeWidth="6.36364"
            strokeLinecap="round"
          />
          <path
            d="M4 15H34"
            stroke="#FFFAE1"
            strokeWidth="6.36364"
            strokeLinecap="round"
          />
          <path
            d="M4 25.9091H34"
            stroke="#FFFAE1"
            strokeWidth="6.36364"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <aside className={`${showMenu ? "fixed" : "hidden"} left-0 top-0 `}>
        <ul>
          <NavList navigationSelect={navigationSelect}></NavList>
        </ul>
      </aside>
    </nav>
  );
}
