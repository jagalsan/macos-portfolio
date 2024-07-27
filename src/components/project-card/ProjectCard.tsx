// ProjectCard.tsx
import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
  github,
}) => {
  return (
    <div className={styles.card}>
      <Image
        width={350}
        height={260}
        src={image}
        alt={title}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.links}>
          <a
            href={link ? link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={!link ? styles.disabled : ""}
          >
            Live Demo
          </a>
          <a
            href={github ? github : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={!github ? styles.disabled : ""}
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
