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
       <Image src="/github.png" alt='github' width={34} height={34}/> 
       <Image src="/linkedin.png" alt='linkedIn' width={34} height={34}/> 
      
      </div>
      <div className={styles.logo}> <Image src="/pixelplanet3.png" alt='linkedIn' width={280} height={220}/> 
      </div>
      <div className={styles.links}>
        <ThemeToggle/>
      <Link href="/" className={styles.link} >Homepage</Link>
      <Link href="/" className={styles.link} >Contact</Link>
      <Link href="/" className={styles.link} >About</Link>
      <AuthLinks/>
      

      </div>
     
      
    </div>
  )
}

export default Navbar
