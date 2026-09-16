"use client";

import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

interface WatchModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  float?: boolean;
  rotationSpeed?: number;
}

export default function WatchModel({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  float = true,
  rotationSpeed = 0.25,
}: WatchModelProps) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * rotationSpeed;
  });

  const content = (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene.clone()} />
    </group>
  );

  if (!float) {
    return content;
  }

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.12}
      floatIntensity={0.25}
      floatingRange={[-0.08, 0.08]}
    >
      {content}
    </Float>
  );
}

useGLTF.preload("/models/watches/default.glb");
