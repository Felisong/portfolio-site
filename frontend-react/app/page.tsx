"use client";

import Link from "next/link";
import HeroSection from "./components/hero/HeroSection";
import HomeSection from "./components/home-section/HomeSection";
import useWorks from "./hook/useWorks";

export default function Home() {
  const { works, loading } = useWorks();
  return (
    <div>
      <HeroSection></HeroSection>
      <HomeSection works={works} loading={loading}></HomeSection>
      <Link
        target="_blank"
        href="https://icons8.com/icon/cHBUT9SmrD2V/typescript"
      >
        TypeScript
      </Link>{" "}
      icon by{" "}
      <Link target="_blank" href="https://icons8.com">
        Icons8
      </Link>
    </div>
  );
}
