"use client";

import { useEffect, useRef } from "react";

interface SkilliconProps {
  svgStr: string;
  className?: string;
  size?: number;
  color?: string;
}

export default function DisplaySvg({
  svgStr,
  className = "",
  size,
  color,
}: SkilliconProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !svgStr) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgStr, "image/svg+xml");
    const svgElement = doc.querySelector("svg");

    if (!svgElement) return;

    // Clone attributes from the parsed SVG (excluding width/height/fill)
    Array.from(svgElement.attributes).forEach((attr) => {
      if (!["width", "height", "fill"].includes(attr.name)) {
        svgRef.current?.setAttribute(attr.name, attr.value);
      }
    });

    // Set inner HTML
    svgRef.current.innerHTML = svgElement.innerHTML;
  }, [svgStr]);

  return (
    <svg
      ref={svgRef}
      className={`inline-block ${className}`}
      width={size ? `${size}px` : "100%"}
      height={size ? `${size}px` : "100%"}
      fill={color || "currentColor"}
      preserveAspectRatio="xMidYMid meet"
    />
  );
}
