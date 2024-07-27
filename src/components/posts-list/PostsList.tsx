"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./PostsList.module.scss";
import { Post } from "@/modules/posts/domain/Post";

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  const formatReadTime = (readTime: number | undefined): string => {
    if (!readTime) {
      return "1 min de lectura";
    }

    const minutes = Math.ceil(readTime / 60);
    if (minutes < 60) {
      return `${minutes} min de lectura`;
    } else {
      const hours = (minutes / 60).toFixed(1);
      return `${hours} horas de lectura`;
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className={styles.postsList}>
      {posts.map((article) => (
        <div key={article.id} className={styles.article}>
          <span className={styles.preText}>
            Publicado en <strong>Tips de {article.category.name}</strong>{" "}
            <small className={styles.preTextSmall}>
              · {formatDate(article.createdAt)}
            </small>{" "}
          </span>
          <Link className={styles.articleLink} href={"/blog/" + article.name}>
            <div className={styles.content}>
              <h2 className={styles.title}>{article.title}</h2>
              <Image
                className={styles.image}
                src={article.imageUrl as string}
                width={180}
                height={160}
                alt={article.title}
              ></Image>
            </div>
          </Link>
          <div className={styles.bottomPart}>
            <div className={styles.tags}>
              <span className={styles.tag}>{article.tags?.length ? article.tags[0].name : 'No categorizado'}</span>
              <span className={styles.time}>
                {formatReadTime(article.readTime)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
