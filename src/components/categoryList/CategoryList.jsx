import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image"; 
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
       
        <Link href="/blog?cat=valorant" className={`${styles.category} ${styles.valorant}`}>

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> Valorant
        
        </Link>
        <Link href="/blog?cat=gtaV" className={`${styles.category} ${styles.gtaV}`}>

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> Gta V
        
        </Link>
        <Link href="/blog?cat=Fifa" className={`${styles.category} ${styles.fifa}`}> 

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> FIfa
        
        </Link>
        <Link href="/blog?cat=Apex " className={`${styles.category} ${styles.Apex}`}> 

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> Apex Legend
        
        </Link>
        <Link href="/blog?cat=CounterStrike" className={`${styles.category} ${styles.CounterStrike}`}>

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> Counter Strike
        
        </Link>
        <Link href="/blog?cat=warzone" className={`${styles.category} ${styles.warzone}`}>

          <Image src="/image.jpg" width={32} height={32} className={styles.image} /> warzone 
        </Link>
     

        </div>
     
    </div>
  );
};

export default CategoryList;
