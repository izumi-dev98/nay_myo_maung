import { useEffect, useRef, useState } from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../data/experience';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-primary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            My <span className="text-accent">Experience</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and the work I've done.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-0">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Mobile: Left-aligned timeline */}
                <div className="md:hidden flex items-start">
                  {/* Timeline Dot */}
                  <div className="relative mr-6 mt-2">
                    <div className="w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-secondary rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-accent/30">
                    {/* Role */}
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {experience.role}
                    </h3>
                    {/* Company */}
                    <p className="text-text-secondary text-base font-medium mb-2">
                      {experience.company}
                    </p>
                    {/* Duration */}
                    <p className="font-mono text-sm text-text-secondary mb-2">
                      {experience.startDate} — {experience.endDate}
                    </p>
                    {/* Location */}
                    {experience.location && (
                      <p className="text-text-secondary text-sm mb-4">
                        📍 {experience.location}
                      </p>
                    )}
                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-text-secondary text-sm flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Technologies */}
                    {experience.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop: Alternating layout */}
                <div className="hidden md:block">
                  <ExperienceCard
                    experience={experience}
                    isLeft={index % 2 === 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
