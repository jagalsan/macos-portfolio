import { fetchApi } from "@/core/interceptors/http-config";
import { Project } from "../domain/Project";
import { ProjectRepository } from "../domain/ProjectRepository";

export function createApiProjectRepository(): ProjectRepository {
  return {
    getAll,
  };
}

async function getAll(): Promise<Project[]> {
  const posts = await fetchApi("/projects", 'GET').then(
    (response) => response as Promise<Project[]>
  );

  return posts;
}
