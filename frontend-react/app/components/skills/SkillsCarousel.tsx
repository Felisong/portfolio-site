import { Skills } from "@/types";

export default function SkillsCarousel({ skills }: { skills: Skills[] }) {
  console.log(`slides: `, skills);
  return (
    <div className="relative">
      <div className="flex flex-row overflow-hidden w-fit">
        {skills.map((skill) => (
          <div key={skill._id}>
            <div
              className="fill-bright-yellow"
              dangerouslySetInnerHTML={{ __html: skill.logo_svg }}
            ></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button className="text-5xl"> {`<`}</button>
        <button className="text-5xl"> {`>`}</button>
      </div>
    </div>
  );
}
