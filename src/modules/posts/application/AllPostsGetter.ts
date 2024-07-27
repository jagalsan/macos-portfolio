import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";

export class AllPostsGetter {
  constructor(private readonly repository: PostRepository) {}
  async get(): Promise<Post[]> {
    return this.repository.getAll();
  }
}
