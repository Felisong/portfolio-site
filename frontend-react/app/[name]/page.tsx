"use client";

import { PriorWorksModel, Skills } from "@/types";
import useWorks from "../hook/useWorks";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function WorkDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { works, loading } = useWorks();
  const [currentWork, setCurrentWork] = useState<null | PriorWorksModel>(null);
  // this is to organize which work to display on the page
  useEffect(() => {
    if (!loading) {
      const found =
        works.find(
          (work: PriorWorksModel) =>
            encodeURIComponent(work.title) === resolvedParams.name
        ) ?? null;
      setCurrentWork(found);
    }
  }, [works, loading, resolvedParams.name]);
  // this one is to reroute the user if the current was not found
  useEffect(() => {
    if (!loading && currentWork === null) {
      const timeout = setTimeout(() => router.push("/"), 2500);
      return () => clearTimeout(timeout);
    }
  }, [loading, currentWork, router]);

  // returns
  if (loading) return <p>Loading...</p>;
  if (!currentWork) return <p>Project not found, rerouting to home...</p>;
  return (
    <article className="grid grid-cols-1 auto-rows-auto md:grid-cols-2">
      <h1 className="font-header text-center mx-8 my-8 md:col-span-2">
        {currentWork.title}
      </h1>
      <div className="flex flex-col my-6 text-center md:flex-row md:justify-between md:mx-auto md:w-full md:my-2 md:col-span-2">
        <p className="bg-light-pink w-fit mx-auto text-dark-blue py-1 px-2 rounded-4xl my-1 h-fit">
          {currentWork.timeframe}
        </p>
        <p className="bg-light-pink w-fit mx-auto text-dark-blue y-1 px-2 rounded-4xl my-1 h-fit">
          {currentWork.willReturnTo ? "Will return to" : "Will not return to"}
        </p>
        <p className="bg-light-pink w-fit mx-auto text-dark-blue py-1 px-2 rounded-4xl my-1 h-fit">
          {currentWork.complete ? "Complete" : "incomplete"}
        </p>
      </div>
      <img
        className="w-full h-auto self-start p-4"
        src={currentWork.gif}
        alt={currentWork.alt}
      />

      <p
        className="p-4"
        dangerouslySetInnerHTML={{ __html: currentWork.description }}
      ></p>

      <div className="md:col-span-2 mb-16 pb-4 px-4">
        <h1 className="font-header text-center mx-8 my-8 md:col-span-2">
          All Skills Used
        </h1>
        <ul className="md:flex md:flex-wrap md:w-9/10 mx-auto justify-center">
          {currentWork.skills.map((skill: Skills) => (
            <li className="mx-4 " key={skill.skill}>
              <Link href={skill.url}>{skill.skill} </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
