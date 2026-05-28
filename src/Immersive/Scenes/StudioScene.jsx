
import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
} from "@react-three/drei";

function EnergyOrb() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.8}
      floatIntensity={1}
    >
      <mesh position={[3.8, 1.8, -3]}>
        <sphereGeometry args={[0.22, 64, 64]} />

        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.8}
          distort={0.08}
          speed={2}
          roughness={0}
          transparent
          opacity={0.18}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

export default function StudioScene() {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        {/* AMBIENT LIGHT */}
        <ambientLight intensity={0.4} />

        {/* CYAN LIGHT */}
        <pointLight
          position={[3, 2, 2]}
          intensity={25}
          color="#22d3ee"
        />

        {/* PURPLE LIGHT */}
        <pointLight
          position={[-3, -2, -2]}
          intensity={15}
          color="#a855f7"
        />

        {/* MAIN ORB */}
        <EnergyOrb />
      </Canvas>
    </div>
  );
}

