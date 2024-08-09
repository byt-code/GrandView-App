import Sidebar from '../PlayGround/SideBar'
import { Bell, User } from 'lucide-react'
import React, { useState } from 'react'

function MainContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />
      case 'lead-sheet':
        return <LeadSheet />
      case 'quote-sheet':
        return <QuoteSheet />
      case 'inventory':
        return <Inventory />
      case 'job-orders':
        return <JobOrders />
      case 'billing':
        return <Billing />
      case 'reports':
        return <Reports />
      case 'notifications':
        return <Notifications />
      case 'profile':
        return <Profile />
      case 'settings':
        return <Settings />
      default:
        return <DashboardHome />
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'ml-64' : 'ml-16'
          }`}
        >
          <header className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">GrandView Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-full hover:bg-white hover:bg-opacity-30">
                <Bell size={24} className="text-gray-800" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 rounded-full hover:bg-white hover:bg-opacity-30">
                <User size={24} className="text-gray-800" />
              </button>
            </div>
          </header>
          <main className="p-6">{renderTabContent()}</main>
        </div>
      </div>
    </div>
  )
}

export default MainContent
