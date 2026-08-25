import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <section className={css.homeSection}>

<div className={css.homeBlock}>
    <h1 className={css.mainTitle}>Campers of your dreams</h1>
    <p className={css.additionalTitle}>You can find everything you want in our catalog</p>
    <Link href="/catalog">
  <button className={css.homeButton}>View Now</button>
</Link>
</div>


   </section>
  );
}
