import type { HTMLAttributes, ReactNode } from "react";

type TextTag = "p" | "span" | "div";

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: TextTag;
  children: ReactNode;
  muted?: boolean;
  size?: "sm" | "md" | "lg";
};

export function Text({
  as: Component = "p",
  children,
  className = "",
  muted = false,
  size = "md",
  ...props
}: TextProps) {
  return (
    <Component
      className={`text text--${size} ${muted ? "text--muted" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
