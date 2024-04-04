import React from "react";
import styles from "./card.module.css"
import Image from "next/image";
import Link from "next/link";


const Card = () => {
  return (
    <div className={styles.container} >
   
      <div className={styles.imageContainer}>
        <Image src="/image.jpg" alt="" fill className={styles.image} />
      </div>
 
    <div className={styles.textContainer}>
      <div className={styles.detail}>
        <span className={styles.date}>11.12.2024 - </span>
        <span className={styles.category}> Valorant</span>
      </div>
      <Link href="">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium delectus soluta accusantium molestias sint sapiente</h1>
      </Link>
      {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
      <div className={styles.desc} />
      <Link href="" className={styles.link}>
        Read More
      </Link>
    </div>
  </div>
  );
};

export default Card;
