import "./globals.css";
import { Inconsolata } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import PageContent from "@/components/PageContent";

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
      <body className="bg-gray-900">
        <div className={`text-white ${inconsolata.className}`}>
          <Navbar />
          <PageContent>{children}</PageContent>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
