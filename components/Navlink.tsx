import { INavLink } from "@/models";
import Link from "next/link";

export default function NavLink(link: INavLink) {
  return (
    <Link
      className="text-sm m-4 font-semibold leading-6 text-gray-700"
      href={link.link}
    >
      {link.label}
    </Link>
  );
}
