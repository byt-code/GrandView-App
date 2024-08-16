import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Header from './Header'

function DashBoard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className=" text-lg text-gray-900">
      <Header />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <MainContent isSidebarOpen={isSidebarOpen} activeTab={activeTab} />
    </div>
  )
}

export default DashBoard
