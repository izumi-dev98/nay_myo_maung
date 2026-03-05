import { useEffect, useState } from 'react';
import { SkillIcon } from '../../data/skills.jsx';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techIcons = [
    { name: 'PHP', color: '#777BB4', icon: 'php', style: { animationDelay: '0.5s' } },
    { name: 'Laravel', color: '#FF2D20', icon: 'laravel', style: { animationDelay: '1s' } },
    { name: 'React', color: '#61DAFB', icon: 'react', style: { animationDelay: '2s' } },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'javascript', style: { animationDelay: '1.5s' } },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient opacity-50" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px),
                         linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating Tech Icons - Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techIcons.map((tech, index) => (
          <div
            key={tech.name}
            className="absolute animate-float"
            style={{
              ...tech.style,
              top: `${15 + (index * 20)}%`,
              left: index % 2 === 0 ? '5%' : '80%',
            }}
          >
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: `${tech.color}20`,
                border: `1px solid ${tech.color}40`,
              }}
            >
              <SkillIcon icon={tech.icon} color={tech.color} size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10  mx-auto px-6 text-center">
        {/* Greeting */}
        <p
          className={`text-accent font-mono text-lg mt-16 opacity-0 ${
            isVisible ? 'animate-fade-in-up' : ''
          }`}
        >
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 opacity-0 ${
            isVisible ? 'animate-fade-in-up delay-100' : ''
          }`}
        >
          <span className="text-text-primary">Nay Myo Maung</span>
          <span className="text-accent"> (Izumi)</span>
        </h1>

        {/* Role */}
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 opacity-0 ${
            isVisible ? 'animate-fade-in-up delay-200' : ''
          }`}
        >
          <span className="text-text-secondary">Laravel & </span>
          <span className="text-accent">React Developer</span>
        </h2>

        {/* Tagline */}
        <p
          className={`text-text-secondary text-lg md:text-xl text-center mt-2 opacity-0 ${
            isVisible ? 'animate-fade-in-up delay-300' : ''
          }`}
        >
          Laravel & React Developer crafting scalable, high-performance web applications.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 m-10 ${
            isVisible ? 'animate-fade-in-up delay-400' : ''
          }`}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-2 h-10 w-50 bg-accent text-text-primary font-semibold rounded-lg
                       hover:bg-accent-hover transform hover:scale-105 transition-all duration-200
                       shadow-lg shadow-accent/25"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-2 h-10 w-40 border-2 border-accent text-accent font-semibold rounded-lg
                       hover:bg-accent hover:text-text-primary transition-all duration-200
                       transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-[-4%] left-1/2 transform -translate-x-1/2 opacity-0 ${
            isVisible ? 'animate-fade-in-up delay-500' : ''
          }`}
        >
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-text-secondary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
