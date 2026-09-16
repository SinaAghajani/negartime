import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
}

export default function Button({
  className,
  variant = "default",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-[#f5f1e8] text-[#0a0a0a] hover:-translate-y-0.5 hover:bg-[#ffffff]":
            variant === "default",

          "bg-[#c6a15b] text-[#0a0a0a] hover:-translate-y-0.5 hover:bg-[#dec27f]":
            variant === "accent",

          "border border-[rgba(245,241,232,0.2)] bg-transparent text-[#f5f1e8] hover:border-[#c6a15b] hover:text-[#dec27f]":
            variant === "outline",

          "bg-transparent text-[#a7a39b] hover:bg-[#171717] hover:text-[#f5f1e8]":
            variant === "ghost",

          "bg-[#c97878] text-white hover:-translate-y-0.5 hover:bg-[#d88b8b]":
            variant === "danger",
        },
        {
          "h-9 px-4 text-xs": size === "sm",
          "h-11 px-5 text-sm": size === "md",
          "h-13 px-7 text-sm": size === "lg",
          "size-10 p-0": size === "icon",
        },
        className,
      )}
      {...props}
    />
  );
}
