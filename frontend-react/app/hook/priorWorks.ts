// hooks/useSkills.ts
import { Skills } from "@/types";
import { useEffect, useState } from "react";
const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PROD;

export default function useSkills() {
  //TODO: change to work set type
  const [works, setWorks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorks() {
      try {
        const res = await fetch(`${baseURL}/skills`);
        if (!res.ok) throw new Error("Unable to fetch skills.");
        const data = await res.json();
        setWorks(data.works);
      } catch (err) {
        console.error("Fetch error:", err);
        setWorks([]);
      } finally {
        setLoading(false);
      }
    }

    getWorks();
  }, [baseURL]);

  return { works, loading };
}
