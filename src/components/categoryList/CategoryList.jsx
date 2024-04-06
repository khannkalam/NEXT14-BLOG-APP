import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image"; 
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
       
        <Link href="/blog?cat=valorant" className={`${styles.category} ${styles.fps}`}>

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> FPS
        
        </Link>
        <Link href="/blog?cat=gtaV" className={`${styles.category} ${styles.openworld}`}>

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> Open World
        
        </Link>
        <Link href="/blog?cat=Fifa" className={`${styles.category} ${styles.sports}`}> 

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> Sports
        
        </Link>
        <Link href="/blog?cat=Apex " className={`${styles.category} ${styles.storymode}`}> 

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> Story Mode
        
        </Link>
        <Link href="/blog?cat=CounterStrike" className={`${styles.category} ${styles.arcade}`}>

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> Arcade
        
        </Link>
        <Link href="/blog?cat=warzone" className={`${styles.category} ${styles.rpg}`}>

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> RPG 
        </Link>
     

        </div>
     
    </div>
  );
};

export default CategoryList;
