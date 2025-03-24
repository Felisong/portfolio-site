"use client";
import { Skills } from "@/types";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    getSkills();
  }, []);

  useEffect(() => {
    console.log(skills);
  }, [skills]);

  // tsx elements
  const DisplaySkills = skills.map((skill: Skills) => {
    console.log(skill._id);
    return (
      <div key={skill._id}>
        <h1>{skill.skill}</h1>
        <p>{skill.category}</p>
      </div>
    );
  });
  const LoadingElement = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (!loading && skills.length === 0) {
      return <p>No skills found.</p>;
    } else {
      return DisplaySkills;
    }
  };

  return (
    <div className="">
      <p>hello!</p>
      <LoadingElement />
    </div>
  );
}
