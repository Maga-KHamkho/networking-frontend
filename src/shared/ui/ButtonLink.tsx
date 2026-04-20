import { Link, type LinkProps } from "react-router-dom";

type ButtonLinkProps = LinkProps & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

export function ButtonLink({
  className = "",
  size = "md",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`button button--${variant} button--${size} ${className}`.trim()}
      {...props}
    />
  );
}
