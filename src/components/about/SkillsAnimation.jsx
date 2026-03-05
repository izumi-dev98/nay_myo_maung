import { skills, SkillIcon } from '../../data/skills.jsx';

const SkillsAnimation = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-secondary/30">
      <div className="relative">
        {/* Gradient overlays for seamless effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-primary to-transparent z-10" />

        {/* Infinite scrolling marquee */}
        <div className="flex animate-marquee">
          {/* First set */}
          {skills.map((skill, index) => (
            <div
              key={`first-${index}`}
              className="shrink-0 mx-8 px-8 py-5 bg-secondary rounded-xl border border-text-secondary/10
                         hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300
                         cursor-default group flex items-center gap-4"
            >
              <SkillIcon icon={skill.icon} color={skill.color} size={28} />
              <span
                className="font-mono font-medium text-lg text-text-secondary group-hover:text-accent transition-colors duration-300"
              >
                {skill.name}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`second-${index}`}
              className="shrink-0 mx-8 px-8 py-5 bg-secondary rounded-xl border border-text-secondary/10
                         hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300
                         cursor-default group flex items-center gap-4"
            >
              <SkillIcon icon={skill.icon} color={skill.color} size={28} />
              <span
                className="font-mono font-medium text-lg text-text-secondary group-hover:text-accent transition-colors duration-300"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SkillsAnimation;
