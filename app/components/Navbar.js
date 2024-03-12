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
      <Link href="/">home</Link>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/history">history</Link>
      <button type="button" onClick={logout}>
          Logout
        </button>
    </div>
  );
}

export default Navbar;

