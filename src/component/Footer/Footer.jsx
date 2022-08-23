import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr/>
      <div className="footer">
          <div className="social-links">
              <a href="https://github.com/Vanisco-T" target="_blank"> <img src={Github} alt="" /></a>
              <a href=""> <img src={Instagram} alt="" /></a>
              <a href=""> <img src={LinkedIn} alt="" /></a>
          </div>
      </div>
      <div className="blur blurf1"></div>
      <div className="blur blurf2"></div>
    </div>
    )
}

export default Footer