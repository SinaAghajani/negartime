"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";

import CameraRig from "./camera-rig";
import Environment from "./environment";
import Lighting from "./lighting";
import WatchModel from "./watch-model";

interface WatchSceneProps {
  modelPath: string;
  className?: string;
  cameraPosition?: [number, number, number];
  modelScale?: number;
  modelPosition?: [number, number, number];
  enableControls?: boolean;
  enableEnvironment?: boolean;
  enableShadows?: boolean;
}

function SceneFallback() {
  return null;
}

export default function WatchScene({
  modelPath,
  className,
  cameraPosition = [0, 0, 5],
  modelScale = 1,
  modelPosition = [0, 0, 0],
  enableControls = true,
  enableEnvironment = true,
  enableShadows = true,
}: WatchSceneProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.75]}
        camera={{
          position: cameraPosition,
          fov: 35,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows={enableShadows}
      >
        <Suspense fallback={<SceneFallback />}>
          {enableEnvironment && (
            <Environment
              preset="studio"
              background={false}
              environmentIntensity={0.65}
            />
          )}

          <Lighting />

          <CameraRig />

          <WatchModel
            modelPath={modelPath}
            scale={modelScale}
            position={modelPosition}
          />

          {enableShadows && (
            <ContactShadows
              position={[0, -1.35, 0]}
              opacity={0.35}
              scale={8}
              blur={2.5}
              far={4}
              resolution={512}
            />
          )}

          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableDamping
              dampingFactor={0.06}
              minPolarAngle={Math.PI / 2.7}
              maxPolarAngle={Math.PI / 1.8}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
