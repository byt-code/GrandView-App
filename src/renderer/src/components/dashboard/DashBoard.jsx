import React, { useState, useCallback, useMemo } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Header from './Header'

const DashBoard = React.memo(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('home')

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prevState => !prevState)
  }, [])

  const sidebarProps = useMemo(() => ({
    isSidebarOpen,
    toggleSidebar,
    activeTab,
    setActiveTab
  }), [isSidebarOpen, toggleSidebar, activeTab, setActiveTab])

  const mainContentProps = useMemo(() => ({
    isSidebarOpen,
    activeTab
  }), [isSidebarOpen, activeTab])

  return (
    <div className="flex flex-col min-h-screen text-lg text-gray-900">
      <Header />
      <div className="flex flex-1">
        <Sidebar {...sidebarProps} />
        <MainContent {...mainContentProps} />
      </div>
    </div>
  )
})

DashBoard.displayName = 'DashBoard'

export default DashBoard
