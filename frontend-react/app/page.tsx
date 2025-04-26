"use client";

import HeroSection from "./components/hero/HeroSection";
import HomeSkillsSection from "./components/HomeSkillsSection.tsx/page";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <HomeSkillsSection></HomeSkillsSection>
      <a target="_blank" href="https://icons8.com/icon/cHBUT9SmrD2V/typescript">
        TypeScript
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
}
