import Link from "next/link";

const links = [
  { label: "Home", link: "/" },
  { label: "Contact", link: "/contact" },
  { label: "Projects", link: "/projects" },
];

export default function Navbar() {
  return (
    <nav className="ml-40 mt-40">
      {links.map((item, index) => (
        <Link href={item.link} key={index}>
          <span className="mr-4 px-2 py-1 text-xl text-gray-500 hover:text-white hover:underline hover:underline-offset-8">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
