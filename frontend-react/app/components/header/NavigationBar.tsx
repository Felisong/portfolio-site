"use client";

import { useEffect } from "react";
import Hamburger from "./header-components/Hamburger";
import NavList from "./header-components/NavList";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const currentPath = usePathname();

  const navigationSelect = [
    { name: "Home", url: "/", currentPage: currentPath === "/" },
    {
      name: "About Me",
      url: "/about-me",
      currentPage: currentPath === "/about-me",
    },
    {
      name: "Prior Works",
      url: "/prior-works",
      currentPage: currentPath === "/prior-works",
    },
    { name: "Resume", url: "/resume", currentPage: currentPath === "/resume" },
  ];

  return (
    <header className="bg-vibrant-red px-10 py-3 h-fi font-header">
      <ul className="hidden md:flex justify-start">
        <NavList navigationSelect={navigationSelect}></NavList>
      </ul>
      <div className="flex justify-end md:hidden">
        <Hamburger navigationSelect={navigationSelect}></Hamburger>
      </div>
    </header>
  );
}
