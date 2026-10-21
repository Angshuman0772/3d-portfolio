import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Model as Computer } from "./Models/Computer.jsx";

const ContactExperience = () => {
  const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <Canvas shadows camera={{ position: [8, 3, 6], fov: 30 }}>
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={5.5} color="#93C5FD" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, -2]}
      />

      <group>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#60A5FA" />
        </mesh>
      </group>

      <group
        scale={isMobile ? 0.65 : isTablet ? 0.65 : 0.8}
        position={[0, -1.5, -2]}
        castShadow
      >
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
