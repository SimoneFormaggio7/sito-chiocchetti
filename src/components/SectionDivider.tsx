"use client";

interface SectionDividerProps {
  from?: "white" | "light" | "dark" | "black";
  to?: "white" | "light" | "dark" | "black";
  height?: "sm" | "md" | "lg";
}

const colorMap = {
  white: "from-white",
  light: "from-neutral-50",
  dark: "from-neutral-950",
  black: "from-neutral-950",
};

const colorMapTo = {
  white: "to-white",
  light: "to-neutral-50",
  dark: "to-neutral-950",
  black: "to-neutral-950",
};

const heightMap = {
  sm: "h-16",
  md: "h-24",
  lg: "h-32",
};

export default function SectionDivider({
  from = "white",
  to = "dark",
  height = "md",
}: SectionDividerProps) {
  return (
    <div
      className={`${heightMap[height]} bg-gradient-to-b ${colorMap[from]} ${colorMapTo[to]}`}
    />
  );
}
