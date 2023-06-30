"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TypeAnimation } from "react-type-animation";

const links = [
  { label: "Home", link: "/" },
  { label: "Contact", link: "/contact" },
  { label: "Projects", link: "/projects" },
  { label: "Profile", link: "/profile" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <div className="ml-5 mt-2 lg:ml-20 lg:mt-20">
      <TypeAnimation
        sequence={["Shawn Birring", 2000]}
        cursor={true}
        repeat={Infinity}
        wrapper="h1"
        className="mb-2 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent"
      />
      <nav className="flex items-center justify-between">
        <ul className="flex flex-wrap">
          {links.map((item, index) => (
            <li key={index} className="mr-4">
              <Link
                href={item.link}
                className={`py-1 pr-2 text-xl ${
                  path === item.link
                    ? "underline underline-offset-8"
                    : "text-gray-500 hover:text-white hover:underline hover:underline-offset-8"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {path === "/profile" && (
            <li>
              <a
                href="/resume.pdf"
                download
                className="rounded bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-600 bg-clip-text py-1 text-xl font-bold text-transparent"
              >
                Download Resume
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
