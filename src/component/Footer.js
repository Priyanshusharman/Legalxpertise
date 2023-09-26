import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/LegalXpertise-logo.jpg'

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
    <div className="footer-div">
      <div><img src={logo} alt="logo" style={{ width: '400px', height: '100px' }} /></div>
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
        <li><Link className="a-footer" to="">Talk To Lawyer</Link></li>
        <li><Link className="a-footer" to="">Property</Link></li>
        <li><Link className="a-footer" to="">Document</Link></li>
        <li><Link className="a-footer" to="">Startup</Link></li>
      </ul>
    </div>
    <div className="footer-div">
      <h3>SUPPORT</h3>
      <ul className="ul-footer">

        <li><Link className="a-footer" to="">Call Us</Link></li>
        <li><Link className="a-footer" to="">WhatsApp</Link></li>
        <li><Link className="a-footer" to="mailto:agarwalmanan69@email.com">Email</Link></li>
      </ul>
    </div>
    <div className="footer-div">
      <div>
        <h3>COMPANY</h3>
      </div>
      <div>
        <ul className="ul-footer">
          <li><Link className="a-footer" to="/aboutus">About Us</Link></li>
          <li><Link className="a-footer" to="mailto:agarwalmanan69@email.com">Contact Us</Link></li>
          <li><Link className="a-footer" to="">Blogs</Link></li>
          <li><Link className="a-footer" to="">Careers</Link></li>
        </ul>
      </div>
    </div>
    <div className="footer-div">
      <div>
        <h3>LEGAL</h3>
      </div>
      <div>
        <ul className="ul-footer">

          <li><Link className="a-footer" to="">Privacy Policy</Link></li>
          <li><Link className="a-footer" to="">Terms Of Use</Link></li>
        </ul>
      </div>
    </div>
  </footer>
  <hr/>
  <p className="end">2023 LegalXpertise Pvt. Ltd. |  <span className="span-footer">All Rights Reserved</span></p>
    </>
  )
}
