"use client";

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[5, 7, 5]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        position={[-4, 3, 2]}
        intensity={25}
        distance={15}
        decay={2}
      />
      <pointLight
        position={[4, 1, -3]}
        intensity={18}
        distance={12}
        decay={2}
      />
    </>
  );
}
