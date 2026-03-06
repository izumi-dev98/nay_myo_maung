const ExperienceCard = ({ experience, isLeft }) => {
  return (
    <div className={`flex items-center justify-between w-full mb-8 ${isLeft ? 'flex-row-reverse' : ''} md:flex-row`}>
      {/* Card */}
      <div className="w-full md:w-[45%] bg-secondary rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-accent/30">
        {/* Role */}
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">
          {experience.role}
        </h3>

        {/* Company */}
        <p className="text-text-secondary text-base md:text-lg font-medium mb-2">
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
          {experience.description.map((item, index) => (
            <li key={index} className="text-text-secondary text-sm flex items-start">
              <span className="text-accent mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {experience.technologies && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Timeline Dot (Desktop) */}
      <div className="hidden md:flex w-[10%] justify-center">
        <div className="w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50 animate-pulse"></div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
};

export default ExperienceCard;
