import React from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'


const AuthLinks = () => {
  
  const status= "authenticated"
  
  return (
  <>
  {status === "authenticated" ? (
    <Link href="/login">Login</Link>
  ) : (<>
    <Link href="/writr">Write</Link>
    <span className={styles.link}>Logout</span>
  </>
  ) }
  
  
  
  </>
  )
}

export default AuthLinks
