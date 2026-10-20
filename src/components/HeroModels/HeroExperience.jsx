import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Canvas } from "@react-three/fiber";
import { Model as Room } from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
  const isLaptop = useMediaQuery({ query: `(max-width:1366px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <Canvas camera={{ position: [6, 4, 8.0], fov: 25 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet && !isMobile}
        maxDistance={10}
        minDistance={2}
        minAzimuthAngle={-Math.PI / 100}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        target={[0, -1, 2]}
      />
      <group
        position={[0, -2, 2]}
        rotation={[0, 0, 0]}
        scale={isMobile ? 0.65 : isTablet ? 0.65 : isLaptop ? 0.75 : 1}
      >
        <HeroLights />
        <Particles count={200} />
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
