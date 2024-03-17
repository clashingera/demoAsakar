import React from 'react';

import Style  from  './Footer.module.css';


function Footer() {
  return (
    <>
    <p>ggfjgf</p>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
    <footer id="dk-footer" className={Style.dkfooter}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className={Style.dkfooterboxinfo}>
                <a href="" className="footer-logo">
                  <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt="footer_logo" className="img-fluid" />
                </a>
                <p className={Style.footerinfotext}>
                  वसंतराव देसाई आजरा शेतकरी सहकारी साखर कारखाना लि. अमृतनगर-गवसे
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div className={Style.contactus}>
                    <div className={Style.contacticonmap}>
                      <i className="fa fa-map-o" aria-hidden="true"></i>
                    </div>
                    <div className={Style.contactinfo}>
                      <h3>Ajara, Kolhapur</h3>
                      <span className={Style.animateborder}></span>
                      <p>Gavase Road</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={Style.contactus}>
                    <div className={Style.contacticoncall}>
                      <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                    </div>
                    <div className={Style.contactinfo}>
                      <h3>(023)23247600</h3>
                      <span className={Style.animateborder}></span>
                      <p>Give us a call</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className={Style.footerwidget}>
                    <div className={Style.sectionheading}>
                      <h3>Useful Links</h3>
                      <span className={Style.animateborder}></span>
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
        <div className={Style.copyright1}>
          <div className={Style.container1}>
            <div className="row">
              <div className="col">
                <span>Copyright © 2019, All Right Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;