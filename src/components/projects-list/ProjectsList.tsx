import React from "react";
import ProjectCard from "../project-card/ProjectCard";
import styles from "./ProjectsList.module.scss";
import { Project } from "@/modules/projects/domain/Project";

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <p>Things I`ve built so far</p>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
