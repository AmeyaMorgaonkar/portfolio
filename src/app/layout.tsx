import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { SmoothScroll } from "@/components/smooth-scroll";

const SITE_URL = "https://ameya-morgaonkar.vercel.app";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ameya Morgaonkar | Portfolio",
    template: "%s | Ameya Morgaonkar",
  },
  description:
    "Ameya Morgaonkar — Full stack developer and Computer Engineering undergrad at VIT Pune. Explore projects in React, Next.js, Python, AI/ML, and more.",
  keywords: [
    "Ameya Morgaonkar",
    "Ameya Morgaonkar portfolio",
    "Ameya Morgaonkar developer",
    "Ameya Morgaonkar VIT Pune",
    "Ameya Morgaonkar full stack",
    "full stack developer Pune",
    "computer engineering student VIT",
    "React developer India",
    "Next.js portfolio",
    "Python developer Pune",
    "web developer Pune India",
    "software engineer portfolio",
  ],
  authors: [{ name: "Ameya Morgaonkar", url: SITE_URL }],
  creator: "Ameya Morgaonkar",
  publisher: "Ameya Morgaonkar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ameya Morgaonkar – Portfolio",
    title: "Ameya Morgaonkar | Full Stack Developer & Computer Engineering Student",
    description:
      "Full stack developer and CS undergrad at VIT Pune. Projects in React, Next.js, Python, AI/ML, and systems design.",
    images: [
      {
        url: "/images/Ameya Morgaonkar.jpeg",
        width: 1200,
        height: 630,
        alt: "Ameya Morgaonkar – Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameya Morgaonkar | Full Stack Developer & CS Student",
    description:
      "Full stack developer and Computer Engineering undergrad at VIT Pune. Explore projects, research, and more.",
    images: ["/images/Ameya Morgaonkar.jpeg"],
    creator: "@AmeyaMorgaonkar",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    // Replace with your actual Google Search Console verification code
    google: "bc65e3bd6290b776",
  },
};

// JSON-LD structured data for the Person entity
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ameya Morgaonkar",
  url: SITE_URL,
  image: `${SITE_URL}/images/Ameya%20Morgaonkar.jpeg`,
  jobTitle: "Full Stack Developer",
  description:
    "Full stack developer with a stronger interest in backend. Computer Engineering Undergrad at Vishwakarma Institute of Technology, Pune.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vishwakarma Institute of Technology",
    url: "https://www.vit.edu/",
  },
  knowsAbout: [
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Django",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Machine Learning",
    "Computer Vision",
  ],
  sameAs: [
    "https://github.com/AmeyaMorgaonkar",
    "https://www.linkedin.com/in/ameyamorgaonkar/",
    "https://leetcode.com/AmeyaMorgaonkar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${cormorantGaramond.variable} ${inter.variable} antialiased`}
      >
        <SmoothScroll />
        <ScrollRestoration />
        <ScrollToTop />
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
