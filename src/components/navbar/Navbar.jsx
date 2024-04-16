import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={26} height={26} />
        <Image src="/instagram.png" alt="instagram" width={26} height={26} />
        <Image src="/linkedin.png" alt="tiktok" width={26} height={26} />
        <Image src="/github2.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <Image src="/pixelplanet.png" alt="logo" width={200} height={200} /> 

      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;