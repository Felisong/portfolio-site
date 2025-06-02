import { Skills } from "@/types";
import DisplaySvg from "./DisplaySvg";
import { useEffect, useState } from "react";

export default function SkillsCarousel({ skills }: { skills: Skills[] }) {
  const [displaySkillsArr, setDisplaySkillsArr] = useState<Skills[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  // rounds up for dividernum
  const dividerNum = Math.ceil(skills.length / 3);
  useEffect(() => {
    // where im putting the pieces
    const result: Skills[][] = [];
    // where each piece will go.
    let section: Skills[] = [];

    skills.forEach((skill, index) => {
      section.push(skill);

      const isLastItem = index === skills.length - 1;
      const shouldSplit = (index + 1) % dividerNum === 0;
      if (shouldSplit || isLastItem) {
        result.push(section);
        section = [];
      }
    });

    setDisplaySkillsArr(result);
    setLoading(false);
  }, [skills, dividerNum]);

  return (
    <div className="relative mt-8">
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="relative w-5/6 mx-auto overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out">
            {displaySkillsArr.map((skillSection: Skills[], index) => (
              <div
                key={skillSection[0]._id}
                className="grid grid-cols-2 flex-shrink-0 w-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {skillSection.map((skill: Skills) => (
                  <a
                    href={skill.url}
                    key={skill.skill}
                    className="m-2 transition-transform duration-300 hover:scale-110 hover:text-bright-yellow flex flex-col items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${skill.skill} website`}
                  >
                    <DisplaySvg
                      svgStr={skill.logo_svg}
                      size={80}
                      color="#FFCE74"
                      className="hover:fill-bright-yellow"
                    />
                    <h2 className="mt-2 text-center">{skill.skill}</h2>
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white disabled:opacity-50"
          >
            &lt;
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                Math.min(prev + 1, displaySkillsArr.length - 1)
              )
            }
            disabled={currentSlide === displaySkillsArr.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white disabled:opacity-50"
          >
            &gt;
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {displaySkillsArr.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-bright-yellow" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
