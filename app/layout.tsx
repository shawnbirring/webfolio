"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inconsolata } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

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
  const path = usePathname();
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <div className={`text-white ${inconsolata.className}`}>
          <Navbar />
          <motion.div
            key={path}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
        </div>
      </body>
    </html>
  );
}
