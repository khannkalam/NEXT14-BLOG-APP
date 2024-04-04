
import Menu from "@/components/menu/Menu"
import styles from "./singlePage.module.css"


import React from 'react'
import Image from "next/image"
import Comments from "@/components/comments/Comments"

const Singlepage = () => {
  return (
    <div className={styles.container}>
     <div className={styles.infoContainer}>
    <div className={styles.textContainer}>
    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
    <div className={styles.user}>
    <div className={styles.userImageContainer}>
        <Image src="/image.jpg" alt fill className={styles.avatar}/>
    </div>
    <div className={styles.userTextContainer}>
        <span className={styles.username}> shobhit Sheffard </span>
        <span className={styles.date}> 04.04.2024 </span>
    </div>    
    </div>
    </div>
    <div className={styles.imageContainer}>
    <Image src="/image.jpg" alt fill className={styles.image}/>    
    </div>    
    </div>   
      <div className={styles.content}>
        <div className={styles.post}>
        <div className={styles.description}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error adipisci nihil quos officiis, at debitis voluptatum, nemo repellendus doloremque quasi blanditiis aliquid saepe, molestiae enim. A autem sunt corrupti rerum eum architecto excepturi veritatis accusamus delectus, minima saepe cupiditate harum temporibus mollitia nulla. Quae, tenetur asperiores. Non beatae magnam a ducimus minima quo dolorum recusandae, enim in, eius sed dolore sequi? Animi minima non dolorum ratione, saepe qui consequatur sapiente at reprehenderit tempora assumenda mollitia eum alias obcaecati inventore ea velit consequuntur voluptates? Perferendis quae consequatur nobis natus enim reiciendis maxime, molestias error porro! Aliquid perferendis incidunt temporibus quasi distinctio?
        </p>
        <h2 className="" > Lorem ipsum dolor sit amet consectetur.</h2>
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error adipisci nihil quos officiis, at debitis voluptatum, nemo repellendus doloremque quasi blanditiis aliquid saepe, molestiae enim. A autem sunt corrupti rerum eum architecto excepturi veritatis accusamus delectus, minima saepe cupiditate harum temporibus mollitia nulla. Quae, tenetur asperiores. Non beatae magnam a ducimus minima quo dolorum recusandae, enim in, eius sed dolore sequi? Animi minima non dolorum ratione, saepe qui consequatur sapiente at reprehenderit tempora assumenda mollitia eum alias obcaecati inventore ea velit consequuntur voluptates? Perferendis quae consequatur nobis natus enim reiciendis maxime, molestias error porro! Aliquid perferendis incidunt temporibus quasi distinctio?

        </p>

        </div>
        <div className={styles.comments}>
         <Comments/>   
        </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default Singlepage
