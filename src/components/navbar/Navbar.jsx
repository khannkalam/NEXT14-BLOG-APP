import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
       <Image src="/facebook.png" alt='facebook' width={34} height={34}/> 
       <Image src="/instagram.png" alt='instagram' width={34} height={34}/> 
       <Image src="/github2.png" alt='github' width={30} height={30}/> 
       <Image src="/linkedin.png" alt='linkedIn' width={34} height={34}/> 
      </div >
      
      <div  className={styles.logo} >
      <Link href="/"  ><Image src="/pixelplanet.png" alt='linkedIn' width={200} height={200}/></Link>
      </div>
      
  
  
      
      <div className={styles.links}>
      
      <ThemeToggle/>
      <Link href="/" className={styles.link} >Home</Link>
      <Link href="/about" className={styles.link} >About</Link>
      <AuthLinks/>
      

      </div>
     
      
    </div>
  )
}

export default Navbar
