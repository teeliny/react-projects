import React from 'react'
import { AppProvider } from './context';
import SidebarApp from './SidebarApp';

const SidebarWrapper = () => {
  return (
    <AppProvider>
      <SidebarApp />
    </AppProvider>
  )
}
export default SidebarWrapper;