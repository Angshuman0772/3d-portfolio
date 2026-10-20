import { useRef } from "react";

export const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    element.style.setProperty("--start", `${(angle + 60) % 360}`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <img src="images/star.png" key={i} alt="star" className="size-5" />
          ))}
        </div>
        <div className="mb-5">
          <p className="text-white text-lg">{card.review}</p>
        </div>
        {children}
      </div>
    </div>
  );
};
