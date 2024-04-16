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
        Welcome to Pixel PLanet, your ultimate source for all things gaming! From reviews to news and discussions, we've got you covered. Join our community as we explore the latest releases, uncover hidden gems, and celebrate the vibrant world of gaming!
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
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=fps">Valorant</Link>
          <Link href="/blog?cat=open_World">Gta V</Link>
          <Link href="/blog?cat=arcade">Tekken</Link>
          <Link href="/blog?cat=sports">Fifa</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://facebook.com">Facebook</Link>
          <Link href="https://instagram.com">Instagram</Link>
          <Link href="https://github.com">Github</Link>
          <Link href="https://linkedin.com">Linkedin</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
