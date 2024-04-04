import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.valorant}`}
      >
        Valorant
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.counterstrike}`}>
        Counter Strike
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.gtav}`}>
        Gta V
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fifa}`}>
        Fifa
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.warzone}`}>
        warzone
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.apex}`}>
        Apex Legends
      </Link>
    </div>
  );
};

export default MenuCategories;