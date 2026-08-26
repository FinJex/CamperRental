"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <Link href="/" className={`${css.link} ${pathname === "/" ? css.active : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/catalog" className={`${css.link} ${pathname.startsWith("/catalog") ? css.active : ""}`}>
            Catalog
          </Link>
        </li>
      </ul>
    </nav>
  );
}