"use client";
import { useEffect, useState } from "react";
import type { Skills } from "../../shared/types/types";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [skills, setSkills] = useState<Skills[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch skills
  async function getSkills() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skills`);

      if (!res.ok) {
        throw new Error("Unable to fetch skills.");
      }

      const data = await res.json();
      setSkills(data.skills);
      setLoading(false);
    } catch (error) {
      console.error("Unable to fetch skills.", error);
      setSkills([]);
      setLoading(false);
    }
  }

  const DisplaySkills = skills.map((skill: Skills) => {
    if (loading) {
      return <p>loading</p>;
    }
    return (
      <div key={uuidv4()}>
        <h1>{skill.skill}</h1>
        <p>{skill.category}</p>
      </div>
    );
  });

  useEffect(() => {
    getSkills();
  }, []);

  useEffect(() => {
    console.log(skills);
  }, [skills]);

  return (
    <div className="">
      <p>hello!</p>
      {DisplaySkills}
    </div>
  );
}
