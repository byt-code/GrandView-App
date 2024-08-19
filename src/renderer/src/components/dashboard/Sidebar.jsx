import React, { useMemo, memo } from 'react'
import SidebarHeader from './SidebarHeader'
import Navigation from './Navigation'

const Sidebar = memo(({ isSidebarOpen, toggleSidebar, activeTab, setActiveTab }) => {
  const sidebarClass = useMemo(() => {
    return `fixed left-0 text-slate-700 h-full border-r-[1px] 
      backdrop-blur-md border-white bg-primary-500 bg-opacity-10
      transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-64' : 'w-16'
      } overflow-hidden shadow-lg`
  }, [isSidebarOpen])

  return (
    <aside className={sidebarClass}>
      <SidebarHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navigation isSidebarOpen={isSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
    </aside>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
