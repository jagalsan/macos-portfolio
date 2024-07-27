import { Project } from "../domain/Project";
import { ProjectRepository } from "../domain/ProjectRepository";

export class AllProjectsGetter {
  constructor(private readonly repository: ProjectRepository) {}
  async get(): Promise<Project[]> {
    return this.repository.getAll();
  }
}
