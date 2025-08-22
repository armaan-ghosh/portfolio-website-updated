import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata = {
  title: "Armaan Ghosh — Portfolio",
  description:
    "Computer Engineering @ UWaterloo. I build fast, clean web apps (React/Next.js) and ship AI/data projects.",
  openGraph: {
    title: "Armaan Ghosh — Portfolio",
    description:
      "Web + AI projects, internships, and notes from building in public.",
    url: "https://portfolio-website-updated-five.vercel.app/",
    type: "website",
    images: ["/og.png"] // add a 1200x630 image at /public/og.png
  },
  twitter: { card: "summary_large_image" },
  keywords: [
    "Armaan Ghosh",
    "University of Waterloo",
    "Computer Engineering",
    "React",
    "Next.js",
    "OpenCV",
    "TensorFlow",
    "AWS",
    "Amazon QuickSight",
  ],
  metadataBase: new URL("https://portfolio-website-updated-five.vercel.app/")
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}