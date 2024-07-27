import React from "react";
import styles from "./TechStack.module.scss";
import Image from "next/image";

const techIcons = [
  "/images/icons/html5.png",
  "/images/icons/css3.png",
  "/images/icons/javascript.png",
  "/images/icons/react.png",
  "/images/icons/nextjs.png",
  "/images/icons/bootstrap.png",
  "/images/icons/angular.png",
  "/images/icons/sass.png",
  "/images/icons/git.png",
  "/images/icons/github.png",
  "/images/icons/vscode.png",
];

const TechStack = () => {
  return (
    <section className={styles.techStack}>
      <h2>My Tech Stack</h2>
      <p>Technologies I`ve been working with recently</p>
      <div className={styles.icons}>
        {techIcons.map((icon, index) => (
          <Image width={100} height={100} key={index} src={icon} alt="Tech Icon" className={styles.icon} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
