import ErrorComponent from "@/components/error/Error";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | HiDev",
  description:
    "The page you are looking for does not exist. Please check the URL or return to the homepage.",
  keywords: ["404", "Page Not Found", "HiDev", "Web Development", "Error Page"],
  openGraph: {
    title: "Page Not Found | HiDev",
    description:
      "The page you are looking for does not exist. Please check the URL or return to the homepage.",
    type: "website",
    url: process.env.NEXT_PUBLIC_PROJECT_URL + "/notfound",
    images: [
      {
        url: process.env.NEXT_PUBLIC_PROJECT_URL + "/images/404-image.jpg",
        alt: "404 Not Found",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | HiDev",
    description:
      "The page you are looking for does not exist. Please check the URL or return to the homepage.",
    images: [
      {
        url: process.env.NEXT_PUBLIC_PROJECT_URL + "/images/404-image.jpg",
        alt: "404 Not Found",
      },
    ],
  },
};

export default function Custom404() {
  const title = "Sorry, a system error occurred.";
  const error = "404 - Page Not Found";
  const description =
    "The page you are looking for does not exist. Please check the URL or return to the homepage.";

  return (
    <div>
      <ErrorComponent title={title} error={error} description={description} />
    </div>
  );
}
