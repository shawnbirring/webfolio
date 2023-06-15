import NavLink from "./Navlink";
import { INavLink } from "@/models";

export default function Navbar({ links }: { links: INavLink[] }) {
  return (
    <aside>
      {links.map((item, index) => (
        <NavLink key={index} link={item.link} label={item.label} />
      ))}
    </aside>
  );
}
