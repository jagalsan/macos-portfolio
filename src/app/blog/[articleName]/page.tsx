import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createApiPostRepository } from "@/modules/posts/infrastructure/ApiPostRepository";
import { PostGetter } from "@/modules/posts/application/PostGetter";
import { Post } from "@/modules/posts/domain/Post";
import Image from "next/image";
import styles from "./Article.module.scss";

const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL;

const fetchPost = async (postName: string): Promise<Post> => {
  const postRepository = createApiPostRepository();
  const postGetter = new PostGetter(postRepository);
  return (await postGetter.get(postName)) as Post;
};

export async function generateMetadata({
  params,
}: {
  params: { articleName: string };
}): Promise<Metadata> {
  const article = await fetchPost(params.articleName);
  if (!article) return notFound();

  return {
    title: `${article.title} | HiDev`,
    description: article.extract,
    keywords: article.keyWords?.join(", "),
    openGraph: {
      title: `${article.title} | HiDev`,
      description: article.extract,
      type: "article",
      url: `${projectUrl}/blog/${article.name}`,
      images: [
        {
          url: article.imageUrl as string,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | HiDev`,
      description: article.extract,
      images: [
        {
          url: article.imageUrl as string,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function Article({
  params,
}: {
  params: { articleName: string };
}) {
  const article = await fetchPost(params.articleName);

  if (!article) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <div className={styles.articleHeader}>
        <h1 className={styles.title}>{article.title}</h1>
        <h2 className={styles.extract}>{article.extract}</h2>
      </div>
      <Image
        width={1200}
        height={1200}
        src={article.imageUrl as string}
        alt={article.title}
        className={styles.articleImage}
      ></Image>
      <div
        className={styles.articleContent}
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
    </article>
  );
}
