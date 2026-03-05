import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-secondary rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white hover:bg-accent-hover hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-text-primary hover:text-accent hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary text-text-secondary text-sm rounded-full border border-text-secondary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
