import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";

export class PostCreator {
  constructor(private readonly repository: PostRepository) {}
  async create(post: Post): Promise<void> {
    return this.repository.save(post);
  }
}
