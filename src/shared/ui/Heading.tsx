import type { HTMLAttributes, ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingTag;
  children: ReactNode;
  size?: "hero" | "xl" | "lg" | "md";
};

export function Heading({
  as: Component = "h2",
  children,
  className = "",
  size = "lg",
  ...props
}: HeadingProps) {
  return (
    <Component className={`heading heading--${size} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
