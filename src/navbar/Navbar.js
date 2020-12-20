/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  let linksStyle;
  if (showLinks) {
      linksStyle = `${links.length * 2.5}rem`
    }
  useEffect(() => {
    // console.log(linksRef.current.getBoundingClientReact())
    // const linksHeight = linksRef.current.getBoundingClientReact();
    if (showLinks) {
      // linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      // linksContainerRef.current.style.height = '0px'
    } 
  }, [showLinks])
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      {showLinks && 
        <div className="links-container" style={{height: `${linksStyle}`}} ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
            </li>
            ))}
          </ul>
        </div>
      }
      <ul className="social-icons">
        {social.map((socialIcon) => (
          <li key={socialIcon.id}>
            <a href={socialIcon.url}> {socialIcon.icon}</a>
        </li>
        ))}
      </ul>
    </div>
  </nav>
}

export default Navbar
