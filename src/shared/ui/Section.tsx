import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "default" | "surface" | "muted";
  spacing?: "sm" | "md" | "lg";
};

export function Section({
  className = "",
  spacing = "md",
  tone = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={`section section--${tone} section--${spacing} ${className}`.trim()}
      {...props}
    />
  );
}
