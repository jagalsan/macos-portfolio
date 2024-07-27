import HomeClient from "@/components/home-client/HomeClient";
import { Metadata } from "next";

const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL;

export const metadata: Metadata = {
  title: "Take a Leap | HiDev",
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "software development",
    "custom solutions",
    "bespoke software",
    "technological innovation",
    "app development",
    "business efficiency",
    "web development",
    "custom programming",
    "digital solutions",
    "enterprise software",
    "process optimization",
    "software development services",
  ],
  openGraph: {
    title: "Take a Leap | HiDev",
    description:
      "Your future in technology for web solutions and more. Boost your business with us.",
    url: `${projectUrl}/`,
    images: [
      {
        url: "/images/logos/hfavicon.jpg",
        alt: "HiDev Logo",
      },
    ],
  },
  twitter: {
    site: "@jagalerasanchez",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1599498070273806336/mxj8Yvjl_400x400.jpg",
        alt: "Jose Alberto Galera Sánchez",
      },
    ],
  },
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <HomeClient />
    </>
  );
}
