"use client";

import useSkills from "@/app/hook/useSkills";
import SkillsCarousel from "../skills/SkillsCarousel";

export default function HomeSkillsSection() {
  const { skills, loading } = useSkills();

  return (
    <main className="text-center">
      <h1>My Skills</h1>
      <div className="max-w-full ">
        <SkillsCarousel skills={skills} />
      </div>

      <p>svg here as an absolute behind</p>
    </main>
  );
}
