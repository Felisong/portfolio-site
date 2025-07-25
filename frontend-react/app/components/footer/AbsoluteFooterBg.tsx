"use client";

export default function AbsoluteFooterBg() {
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
        className="w-full h-full absolute"
      >
        <path
          className="fill-[#fa7db7]"
          d="M 200 0 Q 40 0 0 5 L 0 40 L 200 40 Z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
        className="w-full h-full absolute"
      >
        <path
          className="fill-vibrant-red"
          d="M 200 0 Q 40 0 0 10 L 0 40 L 200 40 Z"
        ></path>
      </svg>
    </div>
  );
}
