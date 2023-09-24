import React from 'react'

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
    <div className="footer-div">
      <div><img src="" alt="logo"/></div>
      <div>
        <ul className="ul-footer">
          <li><i className="social-icon fab fa-facebook-f"></i>
            <i className="social-icon fab fa-twitter"></i>
            <i className="social-icon fab fa-instagram"></i>
            <i className="social-icon fas fa-envelope"></i>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-div">
      <h3>SOLUTIONS</h3>
      <ul className="ul-footer">

        <li><a className="a-footer" href="">Talk To Lawyer</a></li>
        <li><a className="a-footer" href="">Property</a></li>
        <li><a className="a-footer" href="">Document</a></li>
        <li><a className="a-footer" href="">Startup</a></li>
      </ul>
    </div>
    <div className="footer-div">
      <h3>SUPPORT</h3>
      <ul className="ul-footer">

        <li><a className="a-footer" href="">Call Us</a></li>
        <li><a className="a-footer" href="">WhatsApp</a></li>
        <li><a className="a-footer" href="mailto:agarwalmanan69@email.com">Email</a></li>
      </ul>
    </div>
    <div className="footer-div">
      <div>
        <h3>COMPANY</h3>
      </div>
      <div>
        <ul className="ul-footer">
          <li><a className="a-footer" href="aboutus.html">About Us</a></li>
          <li><a className="a-footer" href="mailto:agarwalmanan69@email.com">Contact Us</a></li>
          <li><a className="a-footer" href="">Blogs</a></li>
          <li><a className="a-footer" href="">Careers</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-div">
      <div>
        <h3>LEGAL</h3>
      </div>
      <div>
        <ul className="ul-footer">

          <li><a className="a-footer" href="">Privacy Policy</a></li>
          <li><a className="a-footer" href="">Terms Of Use</a></li>
        </ul>
      </div>
    </div>
  </footer>
  <hr/>
  <p className="end">2023 LegalXpertise Pvt. Ltd. |  <span className="span-footer">All Rights Reserved</span></p>
    </>
  )
}
