"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

interface CameraRigProps {
  mouseStrength?: number;
  smoothness?: number;
}

export default function CameraRig({
  mouseStrength = 0.35,
  smoothness = 0.04,
}: CameraRigProps) {
  const groupRef = useRef<Group>(null);
  const { camera } = useThree();

  useFrame(({ pointer }) => {
    if (!groupRef.current) {
      return;
    }

    const targetX = pointer.x * mouseStrength;
    const targetY = pointer.y * mouseStrength;

    groupRef.current.rotation.y +=
      (targetX - groupRef.current.rotation.y) * smoothness;

    groupRef.current.rotation.x +=
      (-targetY - groupRef.current.rotation.x) * smoothness;

    camera.lookAt(0, 0, 0);
  });

  return <group ref={groupRef} />;
}
