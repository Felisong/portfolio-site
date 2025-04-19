"use client";
import { Skills } from "@/types";
import { useEffect, useState } from "react";
const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PROD;

export default function LoadingSkills() {
  const [skills, setSkills] = useState<Skills[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch skills
  async function getSkills() {
    try {
      const res = await fetch(`${baseURL}/skills`);

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
      <div className="m-4 bg-vibrant-red " key={skill._id}>
        <h1 className="font-primary">{skill.skill}</h1>
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
    <div className=" text-blue-950">
      <p className="font-header">hello!</p>
      <LoadingElement />
    </div>
  );
}
