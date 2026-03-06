import { useEffect, useState } from "react";
import SkillsAnimation from "./SkillsAnimation";
import CertificateCard from "./CertificateCard";
import { certificates } from "../../data/certificates";
import profileImg from "../../assets/profile/profile.jpg";
import cvPdf from "../../assets/cv/Profile.pdf";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "1+", label: "Years of Experience" },
  
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-primary">
      {/* Skills Animation */}
      <SkillsAnimation />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mt-5 font-bold text-text-primary mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </div>

        {/* About Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-accent/30 bg-secondary shadow-2xl">
                <img
                  src={profileImg}
                  alt="Nay Myo Maung (Izumi)"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
              Laravel & React Developer
            </h3>

            <div className="space-y-4 text-text-secondary mb-8">
              <p>
                I am a Laravel Developer with hands-on experience in building
                dynamic, high-performance web applications using PHP, Laravel,
                and MySQL. I specialize in backend development, RESTful API
                integration, and designing clean, scalable architectures that
                prioritize performance, security, and maintainability.
              </p>
              <p>
                In addition to development, I have experience as an IT Support
                Specialist, providing technical support, troubleshooting
                hardware and software issues, managing system installations, and
                ensuring reliable IT operations.
              </p>
              <p>
                This dual background allows me to understand both application
                development and system-level challenges, helping me deliver
                practical and user-focused solutions.I am passionate about
                continuous learning, problem-solving, and leveraging technology
                to improve business processes. I thrive in collaborative
                environments and enjoy working on projects that require both
                technical precision and creative thinking.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-secondary/50 rounded-xl border border-text-secondary/10"
                >
                  <div className="text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <a
              href={cvPdf}
              download="NayMyoMaung_CV.pdf"
              className="inline-block px-6 py-3 bg-accent text-text-primary font-semibold rounded-lg hover:bg-accent-hover transform hover:scale-105 transition-all duration-200 shadow-lg shadow-accent/25 cursor-pointer"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Certific<span className="text-accent">ations</span>
            </h3>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Professional certifications and qualifications
            </p>
          </div>

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CertificateCard certificate={certificate} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
