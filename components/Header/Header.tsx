"use client";

import Link from "next/link";
import Image from "next/image";
import css from "./Header.module.css";
import Nav from "../Header/Nav";
import { usePathname } from "next/navigation";
import { useIsFetching } from "@tanstack/react-query";

export default function Header() {
    const pathname = usePathname();
    const isFetching = useIsFetching({ queryKey: ["campers"] });
    const isHome = pathname === "/";
    const forceWhite = isFetching > 0;
  return (
    <header className={`${css.header} ${isHome || forceWhite ? css.headerHome : css.headerGray}`}>
          <Link className={css.logo} href="/" aria-label="TravelTrucks— головна">
      <Image
        src="/icons/logo.svg"
        alt="TravelTrucks"
        width={136}
        height={16}
        priority
      />
    </Link>

<Nav />
    </header>
  );
}