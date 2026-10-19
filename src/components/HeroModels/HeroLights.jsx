const HeroLights = () => (
  <>
    <ambientLight intensity={0.25} color="lightblue" />
    <directionalLight position={[-4, 7, 5]} intensity={1.2} color="#FCF9D9 " />
    <spotLight
      position={[1, 1, 3]}
      angle={1}
      penumbra={0.8}
      intensity={30}
      color="purple"
    />
  </>
);

export default HeroLights;
