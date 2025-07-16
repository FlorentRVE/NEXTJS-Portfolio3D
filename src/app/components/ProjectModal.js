import React from "react";
import Image from "next/image";
import projects from "../../data/projects.json";

const ProjectModal = () => {
  return (
    <div className="modal-projects-wrapper">
      {projects.map((project, index) => (
        <div className="modal-project" key={index}>
          <div className="modal-project-image-wrapper">
            <img
              className="modal-project-image"
              src={project.image}
              alt={`Aperçu du projet ${project.name}`}
            />
          </div>

          <div className="modal-project-description">
            <h3 className="modal-project-title">{project.name}</h3>
            <p className="modal-project-text">{project.description}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le projet ${project.name} sur GitHub`}
            className="modal-project-link"
          >
            <p className="modal-project-link-text">Voir</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectModal;
