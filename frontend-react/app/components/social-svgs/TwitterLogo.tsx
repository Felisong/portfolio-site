"use client";

export default function TwitterLogo({
  width = "40",
  height = "40",
  className = "fill-supplement-white hover:fill-vibrant-red",
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <a href="https://x.com/jacobsheeps">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 256 256"
        className={`cursor-pointer ${className}`}
      >
        <path
          className="transition-colors duration-200"
          strokeMiterlimit="10"
          d="M11 4a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h28a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.21 9.613L37.913 37H29.98l-6.542-9.293L15.5 37H13l9.309-10.896zm3.828 2 14.107 20h3.065L19.979 15z"
          fontFamily="none"
          fontSize="none"
          fontWeight="none"
          style={{ mixBlendMode: "normal" }}
          textAnchor="none"
          transform="scale(5.12)"
        />
      </svg>
    </a>
  );
}
