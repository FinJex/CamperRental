import Link from "next/link";
import Image from "next/image";
import css from "./Header.module.css";
import Nav from "../Header/Nav";

export default function Header() {
  return (
    <header className={css.header}>
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