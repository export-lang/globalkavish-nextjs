"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Tile({ progress }: { progress: MotionValue<number> }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const mesh = ref.current;
    if (!mesh) return;
    const p = progress.get();
    mesh.rotation.y += delta * (0.12 + p * 0.1);
    const scale = THREE.MathUtils.lerp(0.55, 1, p);
    mesh.scale.setScalar(scale);
    const material = mesh.material as THREE.MeshPhysicalMaterial;
    material.roughness = THREE.MathUtils.lerp(0.85, 0.12, p);
    material.clearcoat = THREE.MathUtils.lerp(0, 1, p);
    material.opacity = THREE.MathUtils.clamp(p * 1.6, 0.15, 1);
  });

  return (
    <mesh ref={ref} rotation={[0.45, 0.3, 0]}>
      <boxGeometry args={[2.7, 2.7, 0.14]} />
      <meshPhysicalMaterial
        color="#eee6d8"
        roughness={0.8}
        clearcoatRoughness={0.08}
        metalness={0.05}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function MineralCluster({
  color,
  offset,
  progress,
}: {
  color: string;
  offset: number;
  progress: MotionValue<number>;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 28;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        angle: (i / count) * Math.PI * 2 + offset * 1.4,
        radius: 3.2 + Math.random() * 3.4,
        height: (Math.random() - 0.5) * 5,
        speed: 0.15 + Math.random() * 0.3,
        scale: 0.06 + Math.random() * 0.1,
      })),
    [offset]
  );

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const p = progress.get();
    const t = clock.getElapsedTime();
    const spread = 1 - p;
    seeds.forEach((s, i) => {
      const radius = THREE.MathUtils.lerp(0.5, s.radius, spread);
      const angle = s.angle + t * s.speed * 0.2;
      const height = THREE.MathUtils.lerp(0, s.height, spread) + Math.sin(t * s.speed + i) * 0.08;
      dummy.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
      const scale = s.scale * THREE.MathUtils.lerp(1, 0.3, p);
      dummy.scale.setScalar(scale);
      dummy.rotation.set(t * 0.4 + i, t * 0.25, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.15} />
    </instancedMesh>
  );
}

export function HeroScene({ progress }: { progress: MotionValue<number> }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 6, 5]} intensity={1.4} />
      <directionalLight position={[-6, -3, -4]} intensity={0.5} color="#cfae6b" />
      <Environment resolution={256}>
        <Lightformer intensity={2.5} color="#f7f5f2" position={[0, 4, -2]} scale={[8, 2, 1]} />
        <Lightformer intensity={1.5} color="#cfae6b" position={[-5, 1, 3]} rotation={[0, Math.PI / 2, 0]} scale={[6, 2, 1]} />
        <Lightformer intensity={1.2} color="#ffffff" position={[5, -1, 3]} rotation={[0, -Math.PI / 2, 0]} scale={[6, 2, 1]} />
      </Environment>
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
        <Tile progress={progress} />
      </Float>
      <MineralCluster color="#cdc2b0" offset={0} progress={progress} />
      <MineralCluster color="#a89a83" offset={1} progress={progress} />
      <MineralCluster color="#e6d5ab" offset={2} progress={progress} />
      <MineralCluster color="#6b5f4e" offset={3} progress={progress} />
    </Canvas>
  );
}

export default HeroScene;
