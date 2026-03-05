import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CertificateCard = ({ certificate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-secondary rounded-2xl overflow-hidden border border-text-secondary/10
                  transition-all duration-300 cursor-pointer group
                  ${isHovered ? 'transform -translate-y-1 shadow-xl shadow-accent/10' : 'shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Certificate Image Preview */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={certificate.downloadUrl}
          alt={certificate.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-medium">View Certificate</span>
        </div>
      </div>

      {/* Certificate Details */}
      <div className="p-5">
        {/* Certificate Name */}
        <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
          {certificate.name}
        </h3>

        {/* Organization */}
        <p className="text-text-secondary text-sm mb-1">
          {certificate.organization}
        </p>

        {/* Date */}
        <p className="text-text-secondary/70 text-sm mb-4">
          {certificate.date}
        </p>

        {/* Download Button */}
        <a
          href={certificate.downloadUrl}
          download
          className={`inline-flex items-center gap-2 text-accent text-sm font-medium
                      transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
        >
          <FontAwesomeIcon icon={faDownload} />
          Download
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
