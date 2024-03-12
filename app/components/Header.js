import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (

    <>
    <header className={styles.header}>
      <div className={styles.companyName}>
        <h1>वसंतराव देसाई आजरा शेतकरी सहकारी साखर कारखाना लि, कोल्हापूर</h1>
      </div>
      <div className={styles.companyAddress}>
        <p>Address: Ajra Gavase, Kolhapur 416509</p>
        <p>Contact: (023)23247600 | Email: ajarasakhar@gmail.com</p>
      </div>
    </header>
    </>
    
  );
}

export default Header;
