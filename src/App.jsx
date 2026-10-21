// import LogoSection from "./sections/LogoSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
    </>
  );
}

export default App;
