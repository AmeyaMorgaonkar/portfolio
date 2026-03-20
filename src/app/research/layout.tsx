import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Academic papers, patents, and research work by Ameya Morgaonkar — spanning AI, computer vision, and systems design.",
  alternates: {
    canonical: "https://ameya-morgaonkar.vercel.app/research",
  },
  openGraph: {
    title: "Research & Publications | Ameya Morgaonkar",
    description:
      "Academic papers, patents, and research publications by Ameya Morgaonkar.",
    url: "https://ameya-morgaonkar.vercel.app/research",
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
