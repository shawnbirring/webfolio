"use client";
import { Link as ScrollLink } from "react-scroll";
import Section from "./Section";

const links = [
  // { label: "Profile", link: "profile" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
];

export default function Navbar() {
  return (
    <Section id="navbar">
      <nav className="flex items-center justify-between">
        <ul className="flex flex-wrap">
          {links.map((item, index) => (
            <li key={index} className="mr-4">
              <ScrollLink
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                className="py-1 pr-2 hover:underline hover:underline-offset-8"
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
    </Section>
  );
}
