import React from 'react';


import Link from 'next/link';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">home</Link>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/history">history</Link>
      <Link href="/logout" className={styles.logout}>Logout</Link>
    </div>
  );
}

export default Navbar;

