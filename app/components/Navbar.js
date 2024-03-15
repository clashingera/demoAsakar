"use client"
import React from 'react';
import { account, ID } from '@/app/appwrite';


import Link from 'next/link';
import styles from './Navbar.module.css';

function Navbar({setLoggedInUser}) {

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
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

