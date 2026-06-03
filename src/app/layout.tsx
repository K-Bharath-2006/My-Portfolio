import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharath K | Full Stack Developer & App Architect",
  description: "Futuristic architecture-focused personal portfolio of Bharath K, a Full Stack Developer, System Design Enthusiast, and AI & ML Explorer.",
  keywords: [
    "Bharath K",
    "Bharath",
    "Full Stack Developer",
    "System Design",
    "MERN Stack",
    "Spring Boot",
    "Next.js Portfolio",
    "Software Engineer",
    "FastAPI"
  ],
  authors: [{ name: "Bharath K" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-cyber-bg text-cyber-text font-inter antialiased min-h-screen relative selection:bg-cyan-500/30 selection:text-white">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
