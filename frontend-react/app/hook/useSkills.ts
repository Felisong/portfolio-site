// hooks/useSkills.ts
import { Skills } from "@/types";
import { useEffect, useState } from "react";
const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PROD;

export default function useSkills() {
  const [skills, setSkills] = useState<Skills[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSkills() {
      try {
        const res = await fetch(`${baseURL}/skills`);
        if (!res.ok) throw new Error("Unable to fetch skills.");
        const data = await res.json();
        setSkills(data.skills);
      } catch (err) {
        console.error("Fetch error:", err);
        setSkills([]);
      } finally {
        setLoading(false);
      }
    }

    getSkills();
  }, [baseURL]);

  return { skills, loading };
}
