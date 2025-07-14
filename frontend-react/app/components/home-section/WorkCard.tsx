"use client";
import { useState } from "react";
import { PriorWorksModel } from "../../../types";
import { useRouter } from "next/navigation";
export default function WorkCard({ work }: { work: PriorWorksModel }) {
  const router = useRouter();
  const [skillsDisplayed, setSkillsDisplayed] = useState<boolean>(false);
  // on hover, transition
  const handleSkillDisplay = () => {
    setSkillsDisplayed(!skillsDisplayed);
  };
  const handleMouseEnter = () => {
    setSkillsDisplayed(true);
  };
  const handleMouseLeave = () => {
    setSkillsDisplayed(false);
  };

  return (
    <article className="pt-16 rounded-full h-fit transition w-full">
      <div
        className={`relative h-fit w-[90%] m-auto rounded-4xl overflow-hidden transition-transform duration-150 ease-in-out ${
          skillsDisplayed ? "scale-110" : "scale-100"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {skillsDisplayed && (
          <div className="w-full h-full flex flex-col justify-around bg-dark-pink absolute">
            <p
              dangerouslySetInnerHTML={{
                __html: work.description.substring(0, 100) + "...",
              }}
            ></p>
            <button
              className="hover:text-bright-yellow"
              onClick={() => {
                router.push(`/${work.title}`);
              }}
            >
              Learn all about this Project
            </button>
          </div>
        )}
        <img className="w-full h-auto" src={work.gif} alt="lorem placeholder" />
      </div>
      <h1 className={`transition-all ${skillsDisplayed ? "mt-6" : "mt-2"}`}>
        {work.title}
      </h1>
      <button onClick={handleSkillDisplay}>
        {skillsDisplayed ? "Hide skills" : "Click here for quick info"}
      </button>
    </article>
  );
}
