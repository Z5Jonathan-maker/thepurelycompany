"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  OrbitControls,
  Float,
} from "@react-three/drei";
import { TextureLoader } from "three";
import type { Group } from "three";
import Image from "next/image";

function JarModel() {
  const groupRef = useRef<Group>(null);

  // Load the product label texture
  const labelTexture = useLoader(
    TextureLoader,
    "/images/products/whipped-tallow-2.5oz.jpg"
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={groupRef} position={[0, -0.1, 0]}>
        {/* Jar body — glossy cream ceramic */}
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.78, 0.82, 1.2, 64]} />
          <meshPhysicalMaterial
            color="#F6F0E4"
            roughness={0.15}
            metalness={0.02}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* Jar rim — subtle lip */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.08, 64]} />
          <meshPhysicalMaterial
            color="#EDE6D6"
            roughness={0.12}
            metalness={0.03}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </mesh>

        {/* Lid — rich dark matte with subtle sheen */}
        <mesh position={[0, 0.72, 0]} castShadow>
          <cylinderGeometry args={[0.84, 0.84, 0.16, 64]} />
          <meshPhysicalMaterial
            color="#2A2420"
            roughness={0.35}
            metalness={0.08}
            clearcoat={0.4}
            clearcoatRoughness={0.3}
          />
        </mesh>

        {/* Lid top knob accent */}
        <mesh position={[0, 0.82, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.03, 64]} />
          <meshPhysicalMaterial
            color="#D2A0A0"
            roughness={0.2}
            metalness={0.15}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </mesh>

        {/* Label band — product texture mapped */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.83, 0.83, 0.55, 64, 1, true]} />
          <meshPhysicalMaterial
            map={labelTexture}
            roughness={0.5}
            metalness={0}
            transparent
            opacity={0.85}
            clearcoat={0.3}
            clearcoatRoughness={0.4}
          />
        </mesh>

        {/* Inner rim glow — subtle rose reflection */}
        <mesh position={[0, 0.58, 0]}>
          <cylinderGeometry args={[0.74, 0.74, 0.04, 64]} />
          <meshPhysicalMaterial
            color="#D2A0A0"
            roughness={0.6}
            metalness={0}
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}

function LoadingFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src="/images/products/whipped-tallow-2.5oz.jpg"
        alt="Whipped Tallow"
        width={400}
        height={500}
        className="h-auto max-h-[450px] w-auto rounded-2xl object-contain"
      />
    </div>
  );
}

export default function Jar3D() {
  return (
    <div className="h-[500px] w-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0.8, 3.2], fov: 32 }}
          className="h-full w-full"
          gl={{ antialias: true, alpha: true, toneMapping: 3 }}
          style={{ background: "transparent" }}
        >
          {/* Studio lighting — 3-point warm setup */}
          <ambientLight intensity={0.3} color="#FFF5E6" />
          <directionalLight
            position={[4, 6, 4]}
            intensity={1.2}
            castShadow
            color="#FFFFFF"
          />
          <directionalLight
            position={[-3, 4, -2]}
            intensity={0.4}
            color="#D2A0A0"
          />
          <directionalLight
            position={[0, -2, 4]}
            intensity={0.2}
            color="#FFF5E6"
          />

          <JarModel />

          <ContactShadows
            position={[0, -0.85, 0]}
            opacity={0.4}
            scale={5}
            blur={2.5}
            far={4}
            color="#36302A"
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3.5}
            maxPolarAngle={Math.PI / 2.2}
          />

          <Environment preset="studio" />
        </Canvas>
      </Suspense>
    </div>
  );
}
