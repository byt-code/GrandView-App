// src/hooks/useSidebar.js
import { useState } from 'react'

function useSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return {
    isSidebarOpen,
    activeTab,
    toggleSidebar,
    setActiveTab
  }
}

export default useSidebar
