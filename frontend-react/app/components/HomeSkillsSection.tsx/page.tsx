"use client";
import useSkills from "@/app/hook/useSkills";
import SkillsCarousel from "../skills/SkillsCarousel";

export default function HomeSkillsSection() {
  const { skills } = useSkills();
  return (
    <main className="text-center">
      <h1>My Skills</h1>
      <div className="max-w-full relative h-fit">
        <div className="z-10">
          <SkillsCarousel skills={skills} />
        </div>
        <div className="bg"></div>
      </div>

      <p>svg here as an absolute behind</p>
    </main>
  );
}
