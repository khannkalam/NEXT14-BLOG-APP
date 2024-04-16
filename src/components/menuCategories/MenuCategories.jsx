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
        Fps
      </Link>
      <Link href="/blog?cat=Open_World" className={`${styles.categoryItem} ${styles.openworld}`}>
        Open Worlds
      </Link>
      <Link href="/blog?cat=Story_Mode" className={`${styles.categoryItem} ${styles.storymode}`}>
        Story Mode
      </Link>
      <Link href="/blog?cat=sports" className={`${styles.categoryItem} ${styles.sports}`}>
        Sports
      </Link>
      <Link href="/blog?cat=arcade" className={`${styles.categoryItem} ${styles.arcade}`}>
        Arcade
      </Link>
      <Link href="/blog?cat=rpg" className={`${styles.categoryItem} ${styles.rpg}`}>
      Rpg
      </Link>
    </div>
  );
};

export default MenuCategories;