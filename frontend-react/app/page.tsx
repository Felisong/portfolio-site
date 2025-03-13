"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [skills, setSkills] = useState<any>([]);

  // Function to fetch skills
  async function getSkills() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skills`);

      if (!res.ok) {
        throw new Error("Unable to fetch skills.");
      }

      const data = await res.json();
      setSkills(data.skills);
    } catch (error) {
      console.error("Unable to fetch skills.");
      setSkills({ success: false, message: "Unable to fetch skills." });
    }
  }

  useEffect(() => {
    getSkills();
  }, []);

  useEffect(() => {
    console.log(skills);
  }, [skills]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>hello!</p>
    </div>
  );
}
