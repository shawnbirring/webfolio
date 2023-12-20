"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", link: "/" },
  { label: "Contact", link: "/" },
  { label: "Projects", link: "/" },
  { label: "Profile", link: "/" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <div className="ml-5 mt-2 lg:ml-20 lg:mt-20">
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
                className="rounded bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-600 bg-clip-text text-xl font-bold text-transparent"
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
