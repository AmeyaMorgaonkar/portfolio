import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { SmoothScroll } from "@/components/smooth-scroll";

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
  title: "Ameya M. | Portfolio",
  description: "Developer and researcher based in Pune, India. Building innovative solutions through code and research.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
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
