"use client"
import React from 'react';


import Link from 'next/link';
import styles from './Navbar.module.css';

function Navbar() {

  const logout = async () => {
    
  };
  

  return (
    <div className={styles.navbar}>
      <Link href="/" passHref className={styles.navLink}> HOME</Link>
      <Link href="/dashboard" passHref className={styles.navLink} >DASHBOARD</Link>
      <Link href="/history" passHref className={styles.navLink} >HISTORY</Link>
      <button onClick={logout} className={styles.logout}>LOGOUT</button>
    </div>
    
  );
}

export default Navbar;

