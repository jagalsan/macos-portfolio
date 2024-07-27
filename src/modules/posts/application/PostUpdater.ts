import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";

export class PostUpdater {
  constructor(private readonly repository: PostRepository) {}
  async update(postId: number, post: Post): Promise<Post> {
    return this.repository.update(postId, post);
  }
}
