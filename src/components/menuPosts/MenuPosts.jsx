import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/main.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.storymode}`}>story mode</span>
          <h3 className={styles.postTitle}>
          GTA Fans Are Going Full Zoom and Enhance on GTA 6 and Reckon They’ve Spotted a Blurry Version of the Map.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> WESLEY YIN-POOLE </span>
            <span className={styles.date}> - 18, 2023, 5:30 p.m.</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fps1.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fps}`}>
            fps
          </span>
          <h3 className={styles.postTitle}>
          Valorant: New Controller Agent Clove Announced, Will Release on March 27.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>MOULIK MATHUR</span>
            <span className={styles.date}> - 25, 2024, 11:15 p.m.</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/openworld.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.openworld}`}>open world</span>
          <h3 className={styles.postTitle}>
          Surprise Red Dead Redemption 2 Patch Doesn’t Add the Update Everyone Really Wants.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> LUKE REILLY </span>
            <span className={styles.date}> - May 22, 2020, 12:01 a.m.</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/sports1.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.sports}`}>
          sports
          </span>
          <h3 className={styles.postTitle}>
          EA Sports FC 24 to Get Free Euro 2024 Update Next Year.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> WESLEY YIN-POOLE </span>
            <span className={styles.date}> - 23, 2023, 9:57 p.m.</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;