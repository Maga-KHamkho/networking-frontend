import type { ComponentPropsWithoutRef } from "react";

type ContainerSize = "default" | "narrow" | "wide";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: ContainerSize;
};

export function Container({ className = "", size = "default", ...props }: ContainerProps) {
  return <div className={`container container--${size} ${className}`.trim()} {...props} />;
}
