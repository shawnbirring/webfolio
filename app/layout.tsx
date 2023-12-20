import "./globals.css";
import { Inconsolata } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

const inconsolata = Inconsolata({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shawn Birring",
  description: "Take a look at my personal webiste!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="bg-gray-900"> */}
      <body className="relative text-white">
        <ParticleBackground />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
