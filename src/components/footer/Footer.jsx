import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/pixelplanet.png" alt="lama blog" width={130} height={130} />
          <h1 className={styles.logoText}>Pixel Planet</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={20} height={20} />
          <Image src="/instagram.png" alt="" width={20} height={20} />
          <Image src="/github2.png" alt="" width={20} height={20} />
          <Image src="/linkedin.png" alt="" width={20} height={20} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Valorant</Link>
          <Link href="/">Gta V</Link>
          <Link href="/">Warzone</Link>
          <Link href="/">Fifa</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Github</Link>
          <Link href="/">Linkedin</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
