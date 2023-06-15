import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Shawn Birring",
  description: "Take a look at my personal webiste!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Projects", link: "/projects" },
  ];
  return (
    <html lang="en">
      <body>
        <Navbar links={links} />
        {children}
      </body>
    </html>
  );
}
