"use client";

import { Environment as DreiEnvironment } from "@react-three/drei";

interface EnvironmentProps {
  preset?:
    | "apartment"
    | "city"
    | "dawn"
    | "forest"
    | "lobby"
    | "night"
    | "park"
    | "studio"
    | "sunset"
    | "warehouse";
  background?: boolean;
  blur?: number;
  environmentIntensity?: number;
}

export default function Environment({
  preset = "studio",
  background = false,
  blur = 0.8,
  environmentIntensity = 0.7,
}: EnvironmentProps) {
  return (
    <DreiEnvironment
      preset={preset}
      background={background}
      blur={blur}
      environmentIntensity={environmentIntensity}
    />
  );
}
