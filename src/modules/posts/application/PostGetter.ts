import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";

export class PostGetter {
  constructor(private readonly repository: PostRepository) {}
  async get(postName: string): Promise<Post | null> {
    return this.repository.get(postName);
  }
}
