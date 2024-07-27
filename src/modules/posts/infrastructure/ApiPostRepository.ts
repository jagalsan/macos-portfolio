import { fetchApi } from "@/core/interceptors/http-config";
import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";

export function createApiPostRepository(): PostRepository {
  return {
    save,
    get,
    getAll,
    update,
  };
}

async function save(post: Post): Promise<void> {
  await fetchApi("/posts", "POST", {
    body: JSON.stringify(post),
  });
}

async function update(id: number, post: Post): Promise<Post> {
  const postAux = await fetchApi(`/posts/${id}`, "PATCH", {
    body: JSON.stringify(post),
  }).then((response) => response as Promise<Post>);

  return postAux;
}

async function get(name: string): Promise<Post> {
  const post = await fetchApi(`/posts/${name}`, "GET").then(
    (response) => response as Promise<Post>
  );

  return post;
}

async function getAll(): Promise<Post[]> {
  const posts = await fetchApi("/posts", "GET").then(
    (response) => response as Promise<Post[]>
  );

  return posts;
}
