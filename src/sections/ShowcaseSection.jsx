import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/checkpoint-crop.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2> A better way to track your games.</h2>
              <p className="text-white-50 md:text-xl">
                Checkpoint is a full-stack web application featuring game
                discovery, personal libraries, status tracking, and
                user-specific statistics. Powered by the RAWG API and a
                MERN-based stack, it brings together external game data and
                persistent user libraries in one cohesive experience.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-violet-300">
                <img
                  src="/images/studyflow.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>AI-powered Study Assistant</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-teal-200">
                <img src="/images/hireflow.png" alt="Job Portal Platform" />
              </div>
              <h2>Job Portal Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
