import React from 'react'
import SidebarHeader from './SidebarHeader'
import Navigation from './Navigation'

const Sidebar = ({ isSidebarOpen, toggleSidebar, activeTab, setActiveTab }) => (
  <aside
    className={`fixed left-0 text-slate-700 h-full border-r-[1px] 
      backdrop-blur-md border-white bg-primary-500 bg-opacity-10
      transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-64' : 'w-16'
      } overflow-hidden shadow-lg`}
  >
    <SidebarHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <Navigation isSidebarOpen={isSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
  </aside>
)

export default Sidebar
