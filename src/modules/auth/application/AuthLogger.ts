import { AuthUser } from "../domain/AuthUser";
import { AuthRepository } from "../domain/AuthRepository";


export class AllProjectsGetter {
  constructor(private readonly repository: AuthRepository) {}
  async login(user: AuthUser): Promise<void> {
    return this.repository.login(user);
  }
}
