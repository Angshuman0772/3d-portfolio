import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Canvas } from "@react-three/fiber";
import { Model as Room } from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <Canvas camera={{ position: [6, 1.5, 8.0], fov: 35 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet && !isMobile}
        maxDistance={10}
        minDistance={2}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        target={[0, -1, 2]}
      />
      <group
        position={[0, -2, 2]}
        rotation={[0, 0, 0]}
        scale={isMobile ? 0.65 : 1}
      >
        <HeroLights />
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
