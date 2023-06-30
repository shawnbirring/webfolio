import "./globals.css";
import "../styles/backgroundAnimation.css";
import Navbar from "@/components/Navbar";
import { Inconsolata } from "next/font/google";

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
      <body>
        <div className={inconsolata.className}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
