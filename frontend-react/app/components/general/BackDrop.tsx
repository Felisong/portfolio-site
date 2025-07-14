"use client";
import TwitterLogo from "../social-svgs/TwitterLogo";
import LinkedInLogo from "../social-svgs/LinkedInLogo";
import GitHubLogo from "../social-svgs/GitHubLogo";
import Link from "next/link";

export default function BackDrop() {
  return (
    <div className="mx-6 p-[5px] rounded-xl bg-gradient-to-b from-[#AE1B55] via-[#001A2E] to-[#FFCE74]">
      <div className="p-6 rounded-xl bg-dark-blue relative text-center">
        <h1>Hello!</h1>
        <p>
          I am a woman with a love for web development and design. An aspiring
          Full Stack Developer.
        </p>
        <ul className="flex justify-center m-2 mb-4">
          <li className="mx-2">
            <LinkedInLogo></LinkedInLogo>
          </li>
          <li className="mx-2">
            <GitHubLogo></GitHubLogo>
          </li>
          <li className="mx-2">
            <TwitterLogo></TwitterLogo>
          </li>
        </ul>
        <Link className="absolute right-2 bottom-2" href="/about-me">
          {`More About Me >`}{" "}
        </Link>
      </div>
    </div>
  );
}
