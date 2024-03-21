import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Roboto_Condensed } from "next/font/google";

const font = Roboto_Condensed({
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
      <body className={`m-0 p-0 text-black ${font.className}`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
