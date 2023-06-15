import { INavLink } from "@/models/INavLink";
import Link from "next/link";

export default function NavLink(link: INavLink) {
  return (
    <Link
      className="m-4 text-sm font-semibold leading-6 text-gray-600"
      href={link.link}
    >
      {link.label}
    </Link>
  );
}
