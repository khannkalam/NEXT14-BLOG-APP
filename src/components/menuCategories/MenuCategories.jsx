import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=fps"
        className={`${styles.categoryItem} ${styles.fps}`}
      >
        FPS
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.openworld}`}>
        Open World
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.storymode}`}>
        Story Mode
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.sports}`}>
        Sports
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.arcade}`}>
        Arcade
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.rpg}`}>
      RPG
      </Link>
    </div>
  );
};

export default MenuCategories;