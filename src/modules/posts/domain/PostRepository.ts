import { Post } from "./Post";

export interface PostRepository {
	save: (post: Post) => Promise<void>;
	get: (postName: string) => Promise<Post | null>;
	getAll: () => Promise<Post[]>;
    update: (id: number, post: Post) => Promise<Post>;
}