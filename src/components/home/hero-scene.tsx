"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { driveImageUrl, tileDesigns } from "@/lib/data/designs";

/** Armani Rich Bianco 600x1200 — verified Kavish design used as the hero surface. */
const HERO_TEXTURE_ID = tileDesigns[1].imageIds[0];

/**
 * The hero slab: glazed printed face, matte compressed-ceramic body on the
 * edges and back — floating with slow micro-rotation, pointer parallax and
 * scroll-driven formation.
 */
function CeramicTile({ progress, interactive }: { progress: MotionValue<number>; interactive: boolean }) {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const [faceTexture, setFaceTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    let disposed = false;
    loader.load(
      driveImageUrl(HERO_TEXTURE_ID, 1024),
      (texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 4;
        setFaceTexture(texture);
      },
      undefined,
      () => {
        /* CORS/network failure — glazed ivory fallback keeps the scene alive */
      }
    );
    return () => {
      disposed = true;
    };
  }, []);

  const materials = useMemo(() => {
    // Matte compressed-ceramic body for edges & back — never plastic/metal/glass.
    const body = new THREE.MeshStandardMaterial({
      color: "#cfc5b4",
      roughness: 0.94,
      metalness: 0,
      transparent: true,
    });
    // Glazed printed face.
    const face = new THREE.MeshPhysicalMaterial({
      color: faceTexture ? "#ffffff" : "#ece5d8",
      map: faceTexture ?? null,
      roughness: 0.85,
      clearcoat: 0,
      clearcoatRoughness: 0.12,
      metalness: 0,
      transparent: true,
    });
    // BoxGeometry material order: +x, -x, +y, -y, +z (face), -z (back)
    return [body, body, body, body, face, body];
  }, [faceTexture]);

  useFrame((state, delta) => {
    const g = group.current;
    const m = mesh.current;
    if (!g || !m) return;
    const p = progress.get();
    const t = state.clock.getElapsedTime();

    // Slow natural float + micro-rotation — never fast.
    g.position.y = Math.sin(t * 0.4) * 0.08;
    g.rotation.z = Math.sin(t * 0.22) * 0.02;
    m.rotation.y += delta * (0.06 + p * 0.05);

    // Gentle pointer parallax (desktop only).
    if (interactive) {
      const targetX = state.pointer.y * 0.12;
      const targetY = state.pointer.x * 0.18;
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, 0.32 + targetX, 0.04);
      g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, 0.18 + targetY, 0.04);
    } else {
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, 0.32, 0.04);
      g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, 0.18, 0.04);
    }

    // Scroll formation: the slab is already clearly present and floating on
    // load (progress 0), then refines to a glazed finished surface.
    const scale = THREE.MathUtils.lerp(0.78, 1, p);
    m.scale.setScalar(scale);
    const face = materials[4] as THREE.MeshPhysicalMaterial;
    face.roughness = THREE.MathUtils.lerp(0.62, 0.16, p);
    face.clearcoat = THREE.MathUtils.lerp(0.2, 0.95, p);
    const opacity = THREE.MathUtils.clamp(0.6 + p * 0.7, 0.6, 1);
    materials.forEach((mat) => {
      mat.opacity = opacity;
    });
  });

  return (
    <group ref={group}>
      <mesh ref={mesh} material={materials}>
        <boxGeometry args={[1.6, 3.2, 0.08]} />
      </mesh>
    </group>
  );
}

function MineralCluster({
  color,
  offset,
  progress,
  count,
}: {
  color: string;
  offset: number;
  progress: MotionValue<number>;
  count: number;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
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
    [offset, count]
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

/** Pauses the render loop while the hero is offscreen. */
function FrameGate({ active }: { active: boolean }) {
  const { invalidate, setFrameloop } = useThree();
  useEffect(() => {
    setFrameloop(active ? "always" : "never");
    if (active) invalidate();
  }, [active, setFrameloop, invalidate]);
  return null;
}

export function HeroScene({ progress, active = true }: { progress: MotionValue<number>; active?: boolean }) {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px) and (pointer: fine)").matches);
  }, []);
  const clusterCount = isDesktop ? 26 : 12;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
    >
      <FrameGate active={active} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 6, 5]} intensity={1.4} />
      <directionalLight position={[-6, -3, -4]} intensity={0.5} color="#cfae6b" />
      <Environment resolution={256}>
        <Lightformer intensity={2.5} color="#f7f5f2" position={[0, 4, -2]} scale={[8, 2, 1]} />
        <Lightformer intensity={1.5} color="#cfae6b" position={[-5, 1, 3]} rotation={[0, Math.PI / 2, 0]} scale={[6, 2, 1]} />
        <Lightformer intensity={1.2} color="#ffffff" position={[5, -1, 3]} rotation={[0, -Math.PI / 2, 0]} scale={[6, 2, 1]} />
      </Environment>
      <CeramicTile progress={progress} interactive={isDesktop} />
      <MineralCluster color="#cdc2b0" offset={0} progress={progress} count={clusterCount} />
      <MineralCluster color="#a89a83" offset={1} progress={progress} count={clusterCount} />
      <MineralCluster color="#e6d5ab" offset={2} progress={progress} count={clusterCount} />
      <MineralCluster color="#6b5f4e" offset={3} progress={progress} count={clusterCount} />
      <ContactShadows position={[0, -2.4, 0]} opacity={0.4} scale={9} blur={2.6} far={4} resolution={256} color="#000000" />
    </Canvas>
  );
}

export default HeroScene;
