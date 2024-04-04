

import CardList from "../../components/cardList/CardList"
import Menu from "../../components/menu/Menu"
import styles from "./blog.module.css"


import React from 'react'

const Blogpage = () => {
  return (
    <div className={styles.container}>
    
    <h1 className={styles.title}> Valorant Blog </h1>
    <div className={styles.content}>
     <CardList/>
     <Menu/>   
    </div>


      
    </div>
  )
}

export default Blogpage
