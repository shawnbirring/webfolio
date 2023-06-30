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
    <div className="ml-5 mt-8 lg:ml-20 lg:mt-20">
      <TypeAnimation
        sequence={["Shawn Birring", 1000]}
        cursor={true}
        repeat={Infinity}
        wrapper="h1"
        className="mb-2 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent"
      />
      <nav className="flex items-center justify-between">
        <ul className="flex space-x-4">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`py-1 pr-2 text-xl ${
                  path === item.link
                    ? "text-white underline underline-offset-8"
                    : "text-gray-500 hover:text-white hover:underline hover:underline-offset-8"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
