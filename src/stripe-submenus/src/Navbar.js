import React from 'react';
import { useGlobalContext } from './context';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn - 3;
    openSubmenu(page, {center, bottom})
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }
  
  return <nav className="nav" onMouseOver={handleSubmenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img className="nav-logo" src={logo} alt="stripe" />
        <button onClick={openSidebar} className="btn toggle-btn">
          <FaBars />
        </button>
      </div>

      <ul className="nav-links">
        <li><button onMouseOver={displaySubmenu} className="link-btn">products</button> </li>
        <li><button onMouseOver={displaySubmenu} className="link-btn">developers</button> </li>
        <li><button onMouseOver={displaySubmenu} className="link-btn">company</button> </li>
      </ul>
      <button className="btn signin-btn">sign in</button>
    </div>
  </nav>
}

export default Navbar
