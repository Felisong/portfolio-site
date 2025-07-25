"use client";

import HeroSection from "./components/hero/HeroSection";
import HomeSection from "./components/home-section/HomeSection";
import useWorks from "./hook/useWorks";

export default function Home() {
  const { works, loading } = useWorks();
  return (
    <div>
      <HeroSection></HeroSection>
      <HomeSection works={works} loading={loading}></HomeSection>
    </div>
  );
}
