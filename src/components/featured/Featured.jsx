import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,PixelPlanet Here!</b> Discover my stories and Creative Ideas
      </h1>
      <div className={styles.post}>
      <div className={styles.imgcontainer}>
        <Image src="/image.jpg" alt="image" fill className={styles.image}/>
      </div>
      <div className={styles.Textcontainer}>
        <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elite.</h1>
        <p className={styles.postDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod suscipit assumenda numquam adipisci tempore blanditiis nisi ipsum! Cumque perferendis eius expedita quod eligendi hic eaque voluptates ipsa sapiente quisquam in dolore beatae est, deleniti asperiores omnis cum quos iste?
        </p>
        <button className={styles.button}>Read More</button>
      </div>
      </div>
      </div>
  )
}

export default Featured
