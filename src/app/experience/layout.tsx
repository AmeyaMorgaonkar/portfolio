import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Education",
  description:
    "Ameya Morgaonkar's professional experience and education — B.Tech Computer Engineering at VIT Pune with 9.45 GPA, project-based curriculum, and hands-on development.",
  alternates: {
    canonical: "https://ameya-morgaonkar.vercel.app/experience",
  },
  openGraph: {
    title: "Experience & Education | Ameya Morgaonkar",
    description:
      "Professional journey and academic background of Ameya Morgaonkar — Computer Engineering at VIT Pune.",
    url: "https://ameya-morgaonkar.vercel.app/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
