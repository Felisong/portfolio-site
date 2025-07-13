// hooks/useSkills.ts
import { PriorWorksModel } from "@/types";
import { useEffect, useState } from "react";
const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PROD;

export default function useWorks() {
  const [works, setWorks] = useState<PriorWorksModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getWorks() {
      try {
        const res = await fetch(`${baseURL}/priorWorks`);
        if (!res.ok) throw new Error("Unable to fetch skills.");
        const data: {
          priorWorks?: PriorWorksModel[];
          status: number;
          message: string;
        } = await res.json();
        if (data.priorWorks) {
          setWorks(data.priorWorks);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setWorks([]);
      } finally {
        setLoading(false);
      }
    }
    getWorks();
  }, []);

  return { works, loading };
}
