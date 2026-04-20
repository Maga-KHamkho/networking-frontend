import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  padding?: "sm" | "md";
};

export function Card({ className = "", padding = "md", ...props }: CardProps) {
  return <article className={`card card--${padding} ${className}`.trim()} {...props} />;
}
