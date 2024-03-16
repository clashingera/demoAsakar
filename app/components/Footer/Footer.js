import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (

    <>
<footer id="dk-footer" className={styles.dkfooter}>
    <div className="container">
        <div className="row">
            <div className={`${styles.colmd12} ${styles.collg4}`}>
                <div className={styles.dkFooterBoxInfo}>
                    <a href="index.html" className={styles.footerLogo}>
                        <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt="footer_logo" className="img-fluid" />
                    </a>
                    <p className={styles.footerInfoText}>
                        वसंतराव देसाई आजरा शेतकरी सहकारी साखर कारखाना  लि. अमृतनगर-गवसे
                    </p>
                </div>
            </div>
            <div className={`${styles.colmd12} ${styles.collg8}`}>
                <div className={styles.row}>
                    <div className={styles.colmd6}>
                        <div className={styles.contactUs}>
                            <div className={styles.contactIconMap}>
                                <i className="fa fa-map-o" aria-hidden="true"></i>
                            </div>
                            <div className={styles.contactInfo}>
                                <h3>Ajara, Kolhapur</h3>
                                <span className={`${styles.animateBorder} ${styles.borderBlack}`}></span>
                                <p>Gavase Road</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.colmd6}>
                        <div className={`${styles.contactUs} ${styles.contactUsLast}`}>
                            <div className={styles.contactIconCall}>
                                <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                            </div>
                            <div className={styles.contactInfo}>
                                <h3>(023)23247600</h3>
                                <span className={`${styles.animateBorder} ${styles.borderBlack}`}></span>
                                <p>Give us a call</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.colmd12} ${styles.collg6}`}>
                        <div className={`${styles.footerWidget} ${styles.footerLeftWidget}`}>
                            <div className={styles.sectionHeading}>
                                <h3>Useful Links</h3>
                                <span className={`${styles.animateBorder} ${styles.borderBlack}`}></span>
                            </div>
                            <ul>
                                <li>
                                    <a href="https://www.mpcb.gov.in/sites/default/files/public_hearing/exe_summary/2019-07/Executive_Summary_English_25092018.pdf">About us</a>
                                </li>
                                <li>
                                    <a href="https://www.anekantprakashan.com/sugar-factory/ajara-shetkari-sahakari-sakhar-karkhana-ltd-ajara-maharashtra/34">Services</a>
                                </li>
                                <li>
                                    <a href="https://www.tenderdetail.com/government-tenders/ajara-shetkari-sahakari-sakhar-karkahana-limited-tenders/1?agid=13506">Tender Log</a>
                                </li>
                                <li>
                                    <a href="/login-page/index.html">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright">
        <div className="container1">
            <div className="row">
                <div className="col">
                    <span>Copyright © 2019, All Right Reserved Seobin</span>
                </div>
            </div>
        </div>
    </div>
</footer>

    
    </>
    
  );
}

export default Footer;
