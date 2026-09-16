import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "narrow" | "full";
}

export default function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-10",
        {
          "max-w-7xl": size === "default",
          "max-w-360": size === "wide",
          "max-w-240": size === "narrow",
          "max-w-none": size === "full",
        },
        className,
      )}
      {...props}
    />
  );
}
