import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog by Ameya Morgaonkar — thoughts on technology, software engineering, AI/ML, web development, and research.",
  alternates: {
    canonical: "https://ameya-morgaonkar.vercel.app/blog",
  },
  openGraph: {
    title: "Blog | Ameya Morgaonkar",
    description:
      "Thoughts on technology, research, and software development by Ameya Morgaonkar.",
    url: "https://ameya-morgaonkar.vercel.app/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
