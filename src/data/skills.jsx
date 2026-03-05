import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaravel,
  faReact,
  faPhp,
  faJs,
  faGit,
  faNode,
  faDocker
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export const skills = [
  { name: "Laravel", color: "#FF2D20", icon: "laravel" },
  { name: "React", color: "#61DAFB", icon: "react" },
  { name: "PHP", color: "#777BB4", icon: "php" },
  { name: "JavaScript", color: "#F7DF1E", icon: "javascript" },
  { name: "TypeScript", color: "#3178C6", icon: "typescript" },
  { name: "MySQL", color: "#4479A1", icon: "mysql" },
  { name: "Git", color: "#F05032", icon: "git" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: "tailwind" },
  { name: "Node.js", color: "#339933", icon: "nodejs" },
  { name: "Docker", color: "#2496ED", icon: "docker" },
];

// Font Awesome brand icons
export const SkillIcon = ({ icon, color, size = 24 }) => {
  const icons = {
    laravel: <FontAwesomeIcon icon={faLaravel} style={{ color, fontSize: size }} />,
    react: <FontAwesomeIcon icon={faReact} style={{ color, fontSize: size }} />,
    php: <FontAwesomeIcon icon={faPhp} style={{ color, fontSize: size }} />,
    javascript: <FontAwesomeIcon icon={faJs} style={{ color, fontSize: size }} />,
    typescript: <FontAwesomeIcon icon={faJs} style={{ color, fontSize: size }} />,
    mysql: <FontAwesomeIcon icon={faDatabase} style={{ color, fontSize: size }} />,
    git: <FontAwesomeIcon icon={faGit} style={{ color, fontSize: size }} />,
    tailwind: <FontAwesomeIcon icon={faJs} style={{ color, fontSize: size }} />,
    nodejs: <FontAwesomeIcon icon={faNode} style={{ color, fontSize: size }} />,
    docker: <FontAwesomeIcon icon={faDocker} style={{ color, fontSize: size }} />,
  };
  return icons[icon] || null;
};
