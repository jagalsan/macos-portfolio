import React from "react";
import TechStack from "@/components/tech-stack/TechStack";
import ProjectsList from "@/components/projects-list/ProjectsList";
import { Metadata } from "next";
import { AllProjectsGetter } from "@/modules/projects/application/AllProjectsGetter";
import { Project } from "@/modules/projects/domain/Project";
import { createApiProjectRepository } from "@/modules/projects/infrastructure/ApiProjectRepository";

const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL;

const fetchProjects = async (): Promise<Project[]> => {
  const projectRepository = createApiProjectRepository();
  const allProjectsGetter = new AllProjectsGetter(projectRepository);
  return await allProjectsGetter.get();
};

export const metadata: Metadata = {
  title: "Projects by HiDev",
  description:
    "Explore my portfolio featuring Web3, React Native, WordPress projects, and SEO-optimized sites. Discover top-tier web development and innovative tech solutions.",
  keywords: [
    "web development",
    "tech projects",
    "software solutions",
    "React Native",
    "WordPress development",
    "SEO optimization",
    "custom web design",
    "blockchain technology",
    "innovative applications",
    "software engineering",
  ],
  openGraph: {
    title: "Projects by HiDev",
    description:
      "Explore my portfolio featuring Web3, React Native, WordPress projects, and SEO-optimized sites. Discover top-tier web development and innovative tech solutions.",
    type: "website",
    url: `${projectUrl}/projects`,
    images: [
      {
        url: `${projectUrl}/images/projects-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Projects by HiDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by HiDev",
    description:
      "Explore my portfolio featuring Web3, React Native, WordPress projects, and SEO-optimized sites. Discover top-tier web development and innovative tech solutions.",
    images: [
      {
        url: `${projectUrl}/images/projects-banner.jpg`,
        alt: "Projects by HiDev",
      },
    ],
  },
};

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <>
      <>
        <TechStack />
        <ProjectsList projects={projects} />
      </>
    </>
  );
}
