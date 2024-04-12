import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Link from "next/link";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,Pixel Planet Here!</b>Explore the Exciting World Games!"
      </h1>
      <div className={styles.post}>
      <div className={styles.imgcontainer}>
        <Image src="/main1.jpeg" alt="image" fill className={styles.image}/>
      </div>
      <div className={styles.Textcontainer}>
        <h1 className={styles.postTitle}>The Best Video Games Coming Out in 2024.</h1>
        <p className={styles.postDesc}>
        A new year means new games to play. Check out the most enticing titles slated to launch on PC
        </p>
          <Link href="/blog">
          <button className={styles.button}>Read More</button>
          
          </Link> 
      </div>
      </div>
      </div>
  )
}

export default Featured
