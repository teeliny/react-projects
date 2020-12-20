import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className="sidebar-header">
      <img src={logo} className="logo" alt="logo" />
      <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
    </div>
    <ul className="links">
      {links.map((link) => (
        <li key={link.id} className="">
          <a href={link.url}>{link.icon} {link.text}</a>
        </li>
      ))}
    </ul>
    <ul className="social-icons">
      {social.map((socialItem) => (
        <li key={socialItem.id} className="">
          <a href={socialItem.url}>{socialItem.icon}</a>
        </li>
      ))}
    </ul>
  </aside>
}

export default Sidebar
