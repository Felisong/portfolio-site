"use client";

import ArrowDown from "../general/ArrowDown";
import BackDrop from "../general/BackDrop";
import SpaceSheepLogo from "./SpaceSheepLogo";

export default function HeroSection() {
  return (
    <>
      <h1 className="font-header text-center mx-8 my-4">
        I am Carolina Henriquez Silva!
      </h1>
      <SpaceSheepLogo></SpaceSheepLogo>
      <section className="flex flex-col justify-center items-center mb-8">
        <BackDrop></BackDrop>
        <ArrowDown></ArrowDown>
      </section>
    </>
  );
}
