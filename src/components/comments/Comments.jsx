import Link from "next/link"
import styles  from "./comments.module.css"
import React from 'react'
import Image from "next/image"




const Comments = () => {
const status = "authenticated";
  return (
    <div className={styles.container}>
        <h1 className={styles.title}> Comments</h1>

     { status === "authenticated" ? (
        <div className={styles.write}>
        <textarea placeholder="write a comment..." className={styles.input}/>
        <button className={styles.button}> Send </button>
       </div>
       ) : (  
       <Link href= "/login"> Login to write comment </Link>
    )} 

    <div className={styles.comments}>
      <div className={styles.comment}>
      <div className={styles.user}>
        <Image src="/image.jpg" alt="image" width={40} height={40} className={styles.image}/> 
        <div className={styles.userInfo}>
           <span className={styles.username}> shobhit Sheffard </span> 
           <span className={styles.date}> 04.04.2024 </span> 
    </div>
    </div>  
    <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus qui dolores similique dignissimos obcaecati porro architecto possimus quas eos iure, a incidunt fugiat eum sequi? Ullam pariatur maxime obcaecati odit illo dolor sed et necessitatibus accusantium deleniti, animi accusamus.</p>
    </div>  
    </div>
    <div className={styles.comments}>
      <div className={styles.comment}>
      <div className={styles.user}>
        <Image src="/image.jpg" alt="image" width={40} height={40} className={styles.image}/> 
        <div className={styles.userInfo}>
           <span className={styles.username}> shobhit Sheffard </span> 
           <span className={styles.date}> 04.04.2024 </span> 
    </div>
    </div>  
    <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus qui dolores similique dignissimos obcaecati porro architecto possimus quas eos iure, a incidunt fugiat eum sequi? Ullam pariatur maxime obcaecati odit illo dolor sed et necessitatibus accusantium deleniti, animi accusamus.</p>
    </div>  
    </div>
    <div className={styles.comments}>
      <div className={styles.comment}>
      <div className={styles.user}>
        <Image src="/image.jpg" alt="image" width={40} height={40} className={styles.image}/> 
        <div className={styles.userInfo}>
           <span className={styles.username}> shobhit Sheffard </span> 
           <span className={styles.date}> 04.04.2024 </span> 
    </div>
    </div>  
    <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus qui dolores similique dignissimos obcaecati porro architecto possimus quas eos iure, a incidunt fugiat eum sequi? Ullam pariatur maxime obcaecati odit illo dolor sed et necessitatibus accusantium deleniti, animi accusamus.</p>
    </div>  
    </div>



</div>
  )
}

export default Comments 
