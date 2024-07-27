import { createApiPostRepository } from "@/modules/posts/infrastructure/ApiPostRepository";
import { Post } from "@/modules/posts/domain/Post";
import PostsList from "@/components/posts-list/PostsList";
import { AllPostsGetter } from "@/modules/posts/application/AllPostsGetter";
import { Metadata } from "next";

export const revalidate = 60;

const fetchPosts = async (): Promise<Post[]> => {
  const postRepository = createApiPostRepository();
  const allPostsGetter = new AllPostsGetter(postRepository);
  return await allPostsGetter.get();
};

const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL;

export const metadata: Metadata = {
  title: "Blog by HiDev",
  description:
    "Discover insightful articles on Web3, React Native, WordPress development, SEO optimization, and more. Stay updated with the latest in web development and innovative tech solutions.",
  keywords: [
    "web development",
    "tech blog",
    "software solutions",
    "React Native articles",
    "WordPress tips",
    "SEO optimization",
    "custom web design",
    "blockchain technology",
    "innovative applications",
    "software engineering",
  ],
  openGraph: {
    title: "Blog by HiDev",
    description:
      "Discover insightful articles on Web3, React Native, WordPress development, SEO optimization, and more. Stay updated with the latest in web development and innovative tech solutions.",
    type: "website",
    url: `${projectUrl}/blog`,
    images: [
      {
        url: `${projectUrl}/images/blog-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Blog by HiDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog by HiDev",
    description:
      "Discover insightful articles on Web3, React Native, WordPress development, SEO optimization, and more. Stay updated with the latest in web development and innovative tech solutions.",
    images: [
      {
        url: `${projectUrl}/images/blog-banner.jpg`,
        alt: "Blog by HiDev",
      },
    ],
  },
};

export default async function Blog() {
  const posts = await fetchPosts();

  return (
    <>
      <div>{posts[0]?.id ? <PostsList posts={posts} /> : "No data"}</div>
    </>
  );
}
