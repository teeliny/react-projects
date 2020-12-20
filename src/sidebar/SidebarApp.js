import React from 'react';
import './sidebar.css';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
function SidebarApp() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default SidebarApp
