import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Ameya Morgaonkar — real estate platforms, face recognition systems, full stack web apps built with React, Next.js, Python, and more.",
  alternates: {
    canonical: "https://ameya-morgaonkar.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Ameya Morgaonkar",
    description:
      "A collection of full stack, AI/ML, and web development projects by Ameya Morgaonkar.",
    url: "https://ameya-morgaonkar.vercel.app/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
