import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            My Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in Laravel, React, and modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
