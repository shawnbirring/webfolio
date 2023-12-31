"use client";
import { Link as ScrollLink } from "react-scroll";
import { Roboto_Condensed } from "next/font/google";

const font = Roboto_Condensed({
  weight: "700",
  subsets: ["latin"],
});

const links = [
  // { label: "Profile", link: "profile" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
];

export default function Navbar() {
  return (
    <section
      className={`relative mx-auto max-w-5xl px-6 py-10 sm:px-16 sm:py-16 ${font.className}`}
    >
      <nav className="flex items-center justify-between">
        <ul className="flex flex-wrap">
          {links.map((item, index) => (
            <li key={index} className="mr-4">
              <ScrollLink
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                className="py-1 pr-2 hover:text-white hover:underline hover:underline-offset-8"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
          {/* 
          <li>
            <a
              href="/resume.pdf"
              download
              className="rounded bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-600 bg-clip-text text-xl font-bold text-transparent"
            >
              Download Resume
            </a>
          </li> */}
        </ul>
      </nav>
    </section>
  );
}
