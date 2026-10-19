const HeroLights = () => (
  <>
    <ambientLight intensity={0.16} color="#c6c2ff" />
    <hemisphereLight args={["#8794df", "#171126", 0.4]} position={[0, 8, 0]} />
    <directionalLight position={[-4, 7, 5]} intensity={1.4} color="purple" />
    <spotLight
      position={[-2.5, 5, 4]}
      angle={0.5}
      penumbra={1}
      intensity={25}
      color="purple"
    />
    <spotLight
      position={[3.5, 4, 2]}
      angle={0.28}
      penumbra={0.75}
      intensity={24}
      color="violet"
    />
    <spotLight
      position={[0, 4, -4]}
      angle={0.34}
      penumbra={0.8}
      intensity={16}
      color="violet"
    />
  </>
);

export default HeroLights;
